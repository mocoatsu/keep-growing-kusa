import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { AchievementRepository } from "../../domain/models/achievement/achievementRepository";
import { EngineerId } from "../../domain/models/engineer/EngineerId";
import { IUnlockAchievementRepository } from "../../domain/models/unlockAchievement/iUnlockAchievementRepository";
import { Condition } from "../../domain/models/unlockAchievement/unlockAchievementRepository";
import { UnlockAchievementMaterial } from "../../domain/models/unlockAchievementMaterial/unlockAchievementMaterial";

export class UnlockAchievementApplicationService {
  private unlockAchievementRepository: IUnlockAchievementRepository;

  constructor(unlockAchievementRepository: IUnlockAchievementRepository) {
    this.unlockAchievementRepository = unlockAchievementRepository;
  }

  async getAllUnlockedAchievements(engineerId: number) {
    const unlockedAchievements = await this.unlockAchievementRepository.findBy(
      new Condition().engineerId(new EngineerId(engineerId))
    );
    const achievements = await new AchievementRepository().findBy();

    return achievements
      .unlocked(unlockedAchievements.unlockedAchievementIds())
      .value()
      .map((v) => {
        return {
          id: v.id ? v.id.value() : 0,
          name: v.name,
          description: v.description,
          difficultyLevel: v.difficultyLevel,
        };
      });
  }

  async unlockFullfilledAchievements(
    engineerId: number,
    material: UnlockAchievementMaterial
  ) {
    const unlockedAchievements = await this.unlockAchievementRepository.findBy(
      new Condition().engineerId(new EngineerId(engineerId))
    );
    const achievements = await new AchievementRepository().findBy();
    const lockedAchievements = achievements.locked(
      unlockedAchievements.unlockedAchievementIds()
    );
    const filledAchievements = lockedAchievements.filledCondition(material);

    await this.unlockAchievementRepository.create(
      filledAchievements.toUnlockAchievements(new EngineerId(engineerId))
    );

    return {
      newUnlockedAchievements: filledAchievements.ids(),
      unlockedAchievements: unlockedAchievements.unlockedAchievementIds(),
    };
  }

  async deleteUnlockAchievements(achievementId: number, engineerId: number) {
    await this.unlockAchievementRepository.delete(
      new AchievementId(achievementId),
      new EngineerId(engineerId)
    );

    return;
  }
}
