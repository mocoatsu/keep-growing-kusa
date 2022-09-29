import { PrismaClient } from "@prisma/client";
import { Achievement } from "./achievement";
import { AchievementId } from "./AchievementId";
import { Achievements } from "./Achievements";
import { IAchievementRepository } from "./iAchievementRepository";

const prisma = new PrismaClient();

export class AchievementRepository implements IAchievementRepository {
  async findByPk(pk: AchievementId) {
    const instance = await prisma.achievement.findUnique({
      where: {
        id: pk.value(),
      },
    });
    if (!instance) {
      throw new Error("Invalid Achievement Id");
    }

    return Achievement.factory(
      instance.id,
      instance.name,
      instance.description,
      instance.difficulty_level
    );
  }

  async findAll() {
    const instances = await prisma.achievement.findMany();

    const achievements = instances.map((i) => {
      return Achievement.factory(
        Number(i.id),
        i.name,
        i.description,
        i.difficulty_level
      );
    });

    return new Achievements(achievements);
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

  async update(achievement: Achievement): Promise<Achievement> {
    if (achievement.id === null) throw Error("no achievement id");

    const instance = await prisma.achievement.update({
      where: { id: achievement.id },
      data: {
        name: achievement.name,
        description: achievement.description,
        difficulty_level: achievement.difficultyLevel,
      },
    });

    return Achievement.factory(
      instance.id,
      instance.name,
      instance.description,
      instance.difficulty_level
    );
  }

  async delete(id: AchievementId) {
    const instances = await prisma.achievement.delete({
      where: { id: id.value() },
    });

    return;
  }
}
