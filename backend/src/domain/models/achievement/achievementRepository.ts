import { Achievement as Instance, Prisma } from "@prisma/client";
import prisma from "../../../client";

import { Achievement } from "./Achievement";
import { AchievementId } from "./AchievementId";
import { Achievements } from "./Achievements";
import { IAchievementRepository } from "./iAchievementRepository";

export class AchievementRepository implements IAchievementRepository {
  async findByPk(pk: AchievementId) {
    const instance = await prisma.achievement.findUnique({
      where: { id: pk.value() },
    });
    if (!instance) {
      throw new Error("Invalid Achievement Id");
    }
    return this.toEntity(instance);
  }

  async findBy(condition: Condition = new Condition()): Promise<Achievements> {
    const instances = await prisma.achievement.findMany(condition.build());
    const achievements = instances.map((i) => {
      return this.toEntity(i);
    });
    return new Achievements(achievements);
  }

  async create(v: Achievement) {
    const instance = await prisma.achievement.create({
      data: {
        name: v.name,
        description: v.description,
        difficulty_level: v.difficultyLevel,
      },
    });
    return this.toEntity(instance);
  }

  async update(achievement: Achievement): Promise<Achievement> {
    if (achievement.id === null) throw Error("no achievement id");
    const instance = await prisma.achievement.update({
      where: { id: achievement.id.value() },
      data: {
        name: achievement.name,
        description: achievement.description,
        difficulty_level: achievement.difficultyLevel,
      },
    });
    return this.toEntity(instance);
  }

  async delete(id: AchievementId) {
    await prisma.achievement.delete({
      where: { id: id.value() },
    });
    return;
  }

  private toEntity(instance: Instance) {
    return Achievement.factory(
      new AchievementId(instance.id),
      instance.name,
      instance.description,
      instance.difficulty_level
    );
  }
}

export class Condition {
  private condition: Prisma.AchievementWhereInput;
  constructor(v: Prisma.AchievementWhereInput = {}) {
    this.condition = v;
  }

  build() {
    return { where: this.condition };
  }
}
