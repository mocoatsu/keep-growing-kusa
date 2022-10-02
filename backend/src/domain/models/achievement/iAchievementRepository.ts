import { Achievement } from "./Achievement";
import { AchievementId } from "./AchievementId";
import { Achievements } from "./Achievements";

export interface IAchievementRepository {
  findByPk: (pk: AchievementId) => Promise<Achievement>;
  findAll: () => Promise<Achievements>;
  create: (achievement: Achievement) => Promise<void>;
  update: (achievement: Achievement) => Promise<Achievement>;
  delete: (id: AchievementId) => Promise<void>;
}
