import { Prisma, PrismaClient } from "@prisma/client";
import { Achievement } from "./achievement";
import { AchievementId } from "./AchievementId";
import { IAchievementRepository } from "./iAchievementRepository";
const prisma = new PrismaClient();

export class AchievementRepository implements IAchievementRepository {
  async findAll() {
    const instances = await prisma.achievement.findMany();

    return instances.map((i) => {
      return new Achievement(i.id, i.name, i.description);
    });
  }

  async delete(id: AchievementId) {
    const instances = await prisma.achievement.delete({
      where: { id: id.value() },
    });

    return;
  }
}
