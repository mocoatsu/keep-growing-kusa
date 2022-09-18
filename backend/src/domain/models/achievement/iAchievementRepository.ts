import { Achievement } from "./achievement";
import { AchievementId } from "./AchievementId";

export interface IAchievementRepository {
  findAll: () => Promise<Achievement[]>;
  create: (achievement: Achievement) => Promise<void>;
  delete: (id: AchievementId) => Promise<void>;
}
