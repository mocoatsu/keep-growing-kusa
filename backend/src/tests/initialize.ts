import { Prisma } from ".prisma/client";
import prisma from "../client";

jest.setTimeout(30000);

export const resetTable = async (
  modelNames: Prisma.ModelName[]
): Promise<void> => {
  const tablenames = modelNames.map((modelName) => ({ tablename: modelName }));

  for (const { tablename } of tablenames) {
    try {
      await prisma.$executeRawUnsafe(
        `TRUNCATE TABLE "public"."${tablename}" RESTART IDENTITY CASCADE;`
      );
    } catch (error) {
      console.log({ error });
    }
  }
};
