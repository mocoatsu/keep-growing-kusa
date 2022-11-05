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

  async saveFullfilled(
    engineerId: number,
    material: UnlockAchievementMaterial
  ) {
    const unlockedAchievements = await this.unlockAchievementRepository.findBy(
      new Condition().engineerId(new EngineerId(engineerId))
    );
    const achievements = await new AchievementRepository().findAll();
    const lockedAchievements = achievements.locked(unlockedAchievements.ids());
    const filledAchievements = lockedAchievements.filledCondition(material);
    this.unlockAchievementRepository.save(
      filledAchievements.toUnlockAchievements(new EngineerId(engineerId))
    );
    return;
  }
}
