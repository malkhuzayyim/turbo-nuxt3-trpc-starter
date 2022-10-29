import { EnvValue, GeneratorOptions } from "@prisma/generator-helper";
import { getDMMF, parseEnvValue } from "@prisma/internals";
import { promises as fs } from "fs";
import Transformer from "./transformer";
import removeDir from "../utils/removeDir";

export async function generate(options: GeneratorOptions) {
  // parse output path
  const outputDir = parseEnvValue(options.generator.output as EnvValue);
  // safely clear output directory
  await fs.mkdir(outputDir, { recursive: true });
  await removeDir(outputDir, true);

  // get prisma client generator, and its corresponding path
  const prismaClientProvider = options.otherGenerators.find(
    (it) => parseEnvValue(it.provider) === "prisma-client-js"
  );

  const prismaClientDmmf = await getDMMF({
    datamodel: options.datamodel,
    previewFeatures: prismaClientProvider?.previewFeatures,
  });

  const dataSource = options.datasources?.[0];

  Transformer.isDefaultPrismaClientOutput =
    prismaClientProvider?.isCustomOutput ?? false;

  if (prismaClientProvider?.isCustomOutput) {
    Transformer.prismaClientOutputPath =
      prismaClientProvider?.output?.value ?? "";
  }
  Transformer.setOutputPath(outputDir);

  // handle enum schemas separately
  const enumTypes = [
    ...prismaClientDmmf.schema.enumTypes.prisma,
    ...(prismaClientDmmf.schema.enumTypes.model ?? []),
  ];
  const enumNames = enumTypes.map((enumItem) => enumItem.name);
  Transformer.enumNames = enumNames ?? [];
  const enumsObj = new Transformer({
    enumTypes,
  });
  await enumsObj.printEnumSchemas();

  // handle model schemas
  const inputObjectTypes = prismaClientDmmf.schema.inputObjectTypes.prisma;
  Transformer.provider = dataSource.provider;

  for (let i = 0; i < inputObjectTypes.length; i += 1) {
    const fields = inputObjectTypes[i]?.fields;
    const name = inputObjectTypes[i]?.name;
    const obj = new Transformer({ name, fields });
    await obj.printObjectSchemas();
  }

  // handle model operations
  const obj = new Transformer({
    modelOperations: prismaClientDmmf.mappings.modelOperations,
  });
  await obj.printModelSchemas();
}
