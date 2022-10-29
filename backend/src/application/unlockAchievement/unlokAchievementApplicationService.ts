import { AchievementRepository } from "../../domain/models/achievement/achievementRepository";
import { ContributionWeeks } from "../../domain/models/contribution/ContributionWeeks";
import { EngineerId } from "../../domain/models/engineer/EngineerId";
import { IUnlockAchievementRepository } from "../../domain/models/unlockAchievement/iUnlockAchievementRepository";
import { UnlockAchievementRepository } from "../../domain/models/unlockAchievement/unlockAchievementRepository";
import { UnlockAchievementMaterial } from "../../domain/models/unlockAchievementMaterial/unlockAchievementMaterial";
import { fetchContributions } from "../../infrastructure/Github/githubApi";

export class UnlockAchievementApplicationService {
  private unlockAchievementRepository: IUnlockAchievementRepository;

  constructor(unlockAchievementRepository: IUnlockAchievementRepository) {
    this.unlockAchievementRepository = unlockAchievementRepository;
  }

  async saveFullfilled(
    engineerId: number,
    material: UnlockAchievementMaterial
  ) {
    const unlockedAchievements =
      await this.unlockAchievementRepository.findEntitiesByEngineerId(
        new EngineerId(engineerId)
      );
    const achievements = await new AchievementRepository().findAll();
    const lockedAchievements = achievements.locked(unlockedAchievements.ids());
    const filledAchievements = lockedAchievements.filledCondition(material);
    this.unlockAchievementRepository.save(
      filledAchievements.toUnlockAchievements(new EngineerId(engineerId))
    );
  }
}
