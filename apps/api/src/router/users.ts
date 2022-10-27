import { createRouter } from "@mono/api/src/functions/createRouter";
import { z } from "zod";

export const users = createRouter()
  .query("findUnique", {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input: { id }, ctx: { prisma } }) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    },
  })
  .query("findMany", {
    input: z
      .object({
        skip: z.number().optional(),
        take: z.number().optional(),
      })
      .optional(),
    async resolve({ input, ctx: { prisma } }) {
      const users = await prisma.user.findMany({
        skip: input?.skip,
        take: input?.take,
        where: {
          id: {
            gt: 0,
          },
        },
      });
      return users;
    },
  });
