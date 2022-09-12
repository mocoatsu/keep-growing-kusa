import { Achievement } from "../models/achievement/achievement";
import { IAchievementRepository } from "../models/achievement/iAchievementRepository";

export class AchievementService {
  private achievementRepository: IAchievementRepository;

  constructor(achievementRepository: IAchievementRepository) {
    this.achievementRepository = achievementRepository;
  }

  async findAll(): Promise<Achievement[]> {
    return await this.achievementRepository.findAll();
  }
}
