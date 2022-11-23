import { Prisma } from ".prisma/client";
import prisma from "../client";

jest.setTimeout(60 * 100 * 5);

export const resetTable = async (): Promise<void> => {
  const tablenames: Prisma.ModelName[] = [
    "UnlockAchievement",
    "Achievement",
    "Engineer",
  ];

  for (const tablename of tablenames) {
    try {
      await prisma.$executeRawUnsafe(
        `TRUNCATE TABLE "public"."${tablename}" RESTART IDENTITY CASCADE;`
      );
    } catch (error) {
      console.log({ error });
    }
  }
};
