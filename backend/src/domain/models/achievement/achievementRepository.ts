import { PrismaClient } from "@prisma/client";
import { Achievement } from "./achievement";
import { AchievementId } from "./AchievementId";
import { IAchievementRepository } from "./iAchievementRepository";

const prisma = new PrismaClient();

export class AchievementRepository implements IAchievementRepository {
  async findAll() {
    const instances = await prisma.achievement.findMany();

    return instances.map((i) => {
      return Achievement.factory(
        Number(i.id),
        i.name,
        i.description,
        i.difficulty_level
      );
    });
  }

  async create(v: Achievement) {
    const instances = await prisma.achievement.create({
      data: {
        name: v.name,
        description: v.description,
        difficulty_level: v.difficultyLevel,
      },
    });

    return;
  }

  async delete(id: AchievementId) {
    const instances = await prisma.achievement.delete({
      where: { id: id.value() },
    });

    return;
  }
}
