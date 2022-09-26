import { createRouter } from "../functions/createRouter";
import { z } from "zod";

export const users = createRouter().query("getById", {
  input: z.object({
    id: z.number(),
  }),
  async resolve({ input, ctx: { prisma } }) {
    return await prisma.user.findUnique({
      where: {
        id: input.id,
      },
    });
  },
});
