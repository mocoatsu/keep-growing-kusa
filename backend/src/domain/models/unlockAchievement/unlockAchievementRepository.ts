import prisma from "../../../client";
import { unlock_achievement as Instance, Prisma } from "@prisma/client";

import { AchievementId } from "../achievement/AchievementId";
import { UnlockAchievements } from "./UnlockAchievements";
import { UnlockAchievement } from "./unlockAchievement";
import { UnlockAchievementId } from "./unlockAchievementId";
import { IUnlockAchievementRepository } from "./iUnlockAchievementRepository";
import { EngineerId } from "../engineer/EngineerId";

export class UnlockAchievementRepository
  implements IUnlockAchievementRepository
{
  async findBy(condition: Condition): Promise<UnlockAchievements> {
    const instances = await prisma.unlock_achievement.findMany(
      condition.build()
    );
    if (!instances) {
      throw new Error("Invalid condition.");
    }
    const entities = instances.map((i) => {
      return this.toEntity(i);
    });
    return new UnlockAchievements(entities);
  }

  async create(unlockAchievements: UnlockAchievements) {
    const input = unlockAchievements
      .value()
      .map((v): Prisma.unlock_achievementUncheckedCreateInput => {
        return {
          achievement_id: v.achievementId.value(),
          engineer_id: v.engineerId.value(),
        };
      });

    const result = await prisma.unlock_achievement.createMany({
      data: input,
    });

    return result.count;
  }

  async delete(achievementId: AchievementId, engineerId: EngineerId) {
    await prisma.unlock_achievement.deleteMany({
      where: {
        achievement_id: achievementId.value(),
        engineer_id: engineerId.value(),
      },
    });
    return;
  }

  private toEntity(instance: Instance) {
    return new UnlockAchievement(
      new UnlockAchievementId(instance.id),
      new AchievementId(instance.achievement_id),
      new EngineerId(instance.engineer_id)
    );
  }
}

export class Condition {
  private condition: Prisma.unlock_achievementWhereInput;
  constructor(v: Prisma.unlock_achievementWhereInput = {}) {
    this.condition = v;
  }

  build() {
    return { where: this.condition };
  }

  engineerId(v: EngineerId) {
    return new Condition({
      ...this.condition,
      engineer_id: v.value(),
    });
  }
}
