import { AchievementRepository } from "../../domain/models/achievement/achievementRepository";
import { ContributionWeeks } from "../../domain/models/contribution/ContributionWeeks";
import { EngineerId } from "../../domain/models/engineer/engineerId";
import { UnlockAchievementRepository } from "../../domain/models/unlockAchievement/unlockAchievementRepository";
import { UnlockAchievementMaterial } from "../../domain/models/unlockAchievementMaterial/unlockAchievementMaterial";
import { fetchContributions } from "../../infrastructure/Github/githubApi";

export class UnlockAchievementApplicationService {
  async saveFullfilled(engineerId: number) {
    const achievements = await new AchievementRepository().findAll();

    const contributions = await fetchContributions();
    const contributionsMaterial = {
      contributions: {
        contributionWeeks: new ContributionWeeks(
          contributions.user?.contributionsCollection.contributionCalendar.weeks
        ),
        total:
          contributions.user?.contributionsCollection.contributionCalendar
            .totalContributions ?? 0,
      },
    };

    const unlockAchievementRepository = new UnlockAchievementRepository();
    const unlockedAchievements =
      await unlockAchievementRepository.findEntitiesByEngineerId(
        new EngineerId(engineerId)
      );

    const materials = new UnlockAchievementMaterial(contributionsMaterial);
    const lockedAchievements = achievements.locked(unlockedAchievements.ids());

    const filledAchievements = lockedAchievements.filledCondition(materials);

    unlockAchievementRepository.save(
      filledAchievements.toUnlockAchievements(engineerId)
    );
  }
}
