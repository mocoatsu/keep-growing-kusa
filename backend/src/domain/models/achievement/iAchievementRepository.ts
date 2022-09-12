import { Achievement } from "./achievement";

export interface IAchievementRepository {
  findAll: () => Promise<Achievement[]>;
}
