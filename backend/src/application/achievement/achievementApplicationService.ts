import { Achievement } from "../../domain/models/achievement/achievement";
import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { IAchievementRepository } from "../../domain/models/achievement/iAchievementRepository";

export class AchievementApplicationService {
  private achievementRepository: IAchievementRepository;

  constructor(achievementRepository: IAchievementRepository) {
    this.achievementRepository = achievementRepository;
  }

  async findAll(): Promise<Achievement[]> {
    return await this.achievementRepository.findAll();
  }

  async create(achievement: Achievement): Promise<void> {
    return await this.achievementRepository.create(achievement);
  }

  async delete(id: AchievementId): Promise<void> {
    return await this.achievementRepository.delete(id);
  }
}
