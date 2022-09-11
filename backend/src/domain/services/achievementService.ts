import { Achievement } from "../models/achievement/achievement";
import { IAchievementRepository } from "../models/achievement/iAchievementRepository";

export class AchievementService {
  private achievementRepository: IAchievementRepository;

  constructor(achievementRepository: IAchievementRepository) {
    this.achievementRepository = achievementRepository;
  }

  findAll(): Promise<Achievement[]> {
    return this.achievementRepository.findAll();
  }
}
