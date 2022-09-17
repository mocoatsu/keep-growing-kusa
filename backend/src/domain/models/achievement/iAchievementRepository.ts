import { Achievement } from "./achievement";
import { AchievementId } from "./AchievementId";

export interface IAchievementRepository {
  findAll: () => Promise<Achievement[]>;
  delete: (id: AchievementId) => Promise<void>;
}
