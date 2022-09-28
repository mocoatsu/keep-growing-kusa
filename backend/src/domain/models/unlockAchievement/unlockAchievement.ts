import { AchievementId } from "../achievement/AchievementId";
import { EngineerId } from "../enginner/engineerId";
import { UnlockAchievementId } from "./unlockAchievementId";

export class UnlockAchievement {
  readonly id: UnlockAchievementId | null;
  readonly achievementId: AchievementId;
  readonly enginnerId: EngineerId;

  constructor(
    id: UnlockAchievementId | null,
    achievementId: AchievementId,
    enginnerId: EngineerId
  ) {
    if (achievementId === null) {
      throw new Error("正しくない実績IDです");
    }
    if (enginnerId === null) {
      throw new Error("正しくないエンジニアIDです");
    }
    this.id = id;
    this.achievementId = achievementId;
    this.enginnerId = enginnerId;
  }

  static factoryWithoutId(
    achievementId: AchievementId,
    enginner_id: EngineerId
  ) {
    return new UnlockAchievement(null, achievementId, enginner_id);
  }

  static factory(
    id: UnlockAchievementId,
    achievementId: AchievementId,
    enginner_id: EngineerId
  ) {
    return new UnlockAchievement(id, achievementId, enginner_id);
  }
}
