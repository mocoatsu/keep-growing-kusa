import { AchievementId } from "../achievement/AchievementId";
import { EngineerId } from "../engineer/engineerId";
import { UnlockAchievementId } from "./unlockAchievementId";

export class UnlockAchievement {
  readonly id: UnlockAchievementId | null;
  readonly achievementId: AchievementId;
  readonly engineerId: EngineerId;

  constructor(
    id: UnlockAchievementId | null,
    achievementId: AchievementId,
    engineerId: EngineerId
  ) {
    if (achievementId === null) {
      throw new Error("正しくない実績IDです");
    }
    if (engineerId === null) {
      throw new Error("正しくないエンジニアIDです");
    }
    this.id = id;
    this.achievementId = achievementId;
    this.engineerId = engineerId;
  }

  static factoryWithoutId(
    achievementId: AchievementId,
    engineer_id: EngineerId
  ) {
    return new UnlockAchievement(null, achievementId, engineer_id);
  }

  static factory(
    id: UnlockAchievementId,
    achievementId: AchievementId,
    engineer_id: EngineerId
  ) {
    return new UnlockAchievement(id, achievementId, engineer_id);
  }
}
