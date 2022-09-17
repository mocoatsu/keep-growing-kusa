import { Achievement } from "../models/achievement/achievement";
import { AchievementId } from "../models/achievement/AchievementId";
import { IAchievementRepository } from "../models/achievement/iAchievementRepository";

export class AchievementService {
  private achievementRepository: IAchievementRepository;

  constructor(achievementRepository: IAchievementRepository) {
    this.achievementRepository = achievementRepository;
  }

  async findAll(): Promise<Achievement[]> {
    return await this.achievementRepository.findAll();
  }

  async delete(id: AchievementId): Promise<void> {
    return await this.achievementRepository.delete(id);
  }
}
