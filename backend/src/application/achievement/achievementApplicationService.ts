import { Achievement } from "../../domain/models/achievement/Achievement";
import { AchievementDifficultyLevel } from "../../domain/models/achievement/AchievementDifficultyLevel";
import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { IAchievementRepository } from "../../domain/models/achievement/iAchievementRepository";

type AchievementResponse = {
  id: number;
  name: string;
  description: string;
  difficultyLevel: number;
};

export class AchievementApplicationService {
  private achievementRepository: IAchievementRepository;

  constructor(achievementRepository: IAchievementRepository) {
    this.achievementRepository = achievementRepository;
  }

  async findById(id: number): Promise<AchievementResponse> {
    const achievement = await this.achievementRepository.findByPk(
      new AchievementId(id)
    );

    return {
      id: achievement.id ? achievement.id.value() : 0,
      name: achievement.name,
      description: achievement.description,
      difficultyLevel: achievement.difficultyLevel,
    };
  }

  async findAll(): Promise<AchievementResponse[]> {
    const allAchievements = await this.achievementRepository.findAll();

    return allAchievements.value().map((v) => {
      return {
        id: v.id ? v.id.value() : 0,
        name: v.name,
        description: v.description,
        difficultyLevel: v.difficultyLevel,
      };
    });
  }

  async create(
    name: string,
    description: string,
    difficultyLevel: string
  ): Promise<void> {
    const achievement = Achievement.factoryWithoutId(
      name,
      description,
      AchievementDifficultyLevel.fromValue(Number(difficultyLevel)).value
    );
    return await this.achievementRepository.create(achievement);
  }

  async update(
    id: number,
    name: string,
    description: string,
    difficultyLevel: number
  ): Promise<AchievementResponse> {
    const editAchievement = Achievement.factory(
      new AchievementId(id),
      name,
      description,
      difficultyLevel
    );

    const achievement = await this.achievementRepository.update(
      editAchievement
    );

    return {
      id: achievement.id ? achievement.id.value() : 0,
      name: achievement.name,
      description: achievement.description,
      difficultyLevel: achievement.difficultyLevel,
    };
  }

  async delete(id: AchievementId): Promise<void> {
    return await this.achievementRepository.delete(id);
  }

  unlockAchievements() {}
}
