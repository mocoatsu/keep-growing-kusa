import { PrismaClient } from "@prisma/client";
import { UnlockAchievements } from "../achievement copy/UnlockAchievements";
import { AchievementId } from "../achievement/AchievementId";
import { EngineerId } from "../enginner/engineerId";
import { IUnlockAchievementRepository } from "./iUnlockAchievementRepository";
import { UnlockAchievement } from "./unlockAchievement";
import { UnlockAchievementId } from "./unlockAchievementId";

const prisma = new PrismaClient();

export class UnlockAchievementRepository
  implements IUnlockAchievementRepository
{
  async findEntitiesByEnginnerId(enginnerId: EngineerId) {
    const instances = await prisma.unlockAchievement.findMany({
      where: {
        enginner_id: enginnerId.value(),
      },
    });

    const unlockAchievements = instances.map((i) => {
      return UnlockAchievement.factory(
        new UnlockAchievementId(i.id),
        new AchievementId(i.achievement_id),
        new EngineerId(i.enginner_id)
      );
    });

    return new UnlockAchievements(unlockAchievements);
  }

  async save(v: UnlockAchievement) {
    const instances = await prisma.unlockAchievement.create({
      data: {
        achievement_id: v.achievementId.value(),
        enginner_id: v.enginnerId.value(),
      },
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
