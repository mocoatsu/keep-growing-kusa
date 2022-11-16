import { Achievement } from "./Achievement";
import { AchievementId } from "./AchievementId";
import { Condition } from "./achievementRepository";
import { Achievements } from "./Achievements";

export interface IAchievementRepository {
  findByPk: (pk: AchievementId) => Promise<Achievement>;
  findBy: (condition?: Condition) => Promise<Achievements>;
  create: (achievement: Achievement) => Promise<void>;
  update: (achievement: Achievement) => Promise<Achievement>;
  delete: (id: AchievementId) => Promise<void>;
}
