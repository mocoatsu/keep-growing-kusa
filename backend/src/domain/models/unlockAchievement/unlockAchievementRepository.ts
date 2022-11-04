import prisma from "../../../client";

import { UnlockAchievements } from "./UnlockAchievements";
import { AchievementId } from "../achievement/AchievementId";
import { EngineerId } from "../engineer/EngineerId";
import { IUnlockAchievementRepository } from "./iUnlockAchievementRepository";
import { UnlockAchievement } from "./unlockAchievement";
import { UnlockAchievementId } from "./unlockAchievementId";

export class UnlockAchievementRepository
  implements IUnlockAchievementRepository
{
  async findEntitiesByEngineerId(engineerId: EngineerId) {
    const instances = await prisma.unlockAchievement.findMany({
      where: {
        engineer_id: engineerId.value(),
      },
    });

    const unlockAchievements = instances.map((i) => {
      return UnlockAchievement.factory(
        new UnlockAchievementId(i.id),
        new AchievementId(i.achievement_id),
        new EngineerId(i.engineer_id)
      );
    });

    return new UnlockAchievements(unlockAchievements);
  }

  async save(unlockAchievements: UnlockAchievements) {
    const unlockAchievementEntities = unlockAchievements.value().map((v) => {
      return {
        achievement_id: v.achievementId.value(),
        engineer_id: v.engineerId.value(),
      };
    });

    const instances = await prisma.unlockAchievement.createMany({
      data: unlockAchievementEntities,
    });

    return;
  }

  async delete(id: UnlockAchievementId) {
    const instances = await prisma.unlockAchievement.delete({
      where: { id: id.value() },
    });

    return;
  }
}
