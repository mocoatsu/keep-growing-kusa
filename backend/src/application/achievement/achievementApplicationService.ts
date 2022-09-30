import { Achievement } from "../../domain/models/achievement/achievement";
import { AchievementDifficultyLevel } from "../../domain/models/achievement/AchievementDifficultyLevel";
import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { Achievements } from "../../domain/models/achievement/Achievements";
import { IAchievementRepository } from "../../domain/models/achievement/iAchievementRepository";

export class AchievementApplicationService {
  private achievementRepository: IAchievementRepository;

  constructor(achievementRepository: IAchievementRepository) {
    this.achievementRepository = achievementRepository;
  }

  async findById(id: number): Promise<Achievement> {
    return await this.achievementRepository.findByPk(new AchievementId(id));
  }

  async findAll(): Promise<Achievements> {
    return await this.achievementRepository.findAll();
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
  ): Promise<Achievement> {
    const achievement = Achievement.factory(
      new AchievementId(id),
      name,
      description,
      difficultyLevel
    );
    return await this.achievementRepository.update(achievement);
  }

  async delete(id: AchievementId): Promise<void> {
    return await this.achievementRepository.delete(id);
  }

  unlockAchievements() {}
}
