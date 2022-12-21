import { AchievementId } from "../../../../domain/models/achievement/AchievementId";
import { EngineerId } from "../../../../domain/models/engineer/EngineerId";
import { UnlockAchievement } from "../../../../domain/models/unlockAchievement/unlockAchievement";
import { UnlockAchievementId } from "../../../../domain/models/unlockAchievement/unlockAchievementId";
import { UnlockedAchievementIds } from "../../../../domain/models/unlockAchievement/unlockAchievementIds";
import { UnlockAchievements } from "../../../../domain/models/unlockAchievement/UnlockAchievements";

beforeEach(() => {});

describe("unlockedAchievementIds", () => {
  it("実績のIDを返すことが出来る", () => {
    // 入力
    const param1 = new UnlockAchievement(new UnlockAchievementId(1), new AchievementId(11), new EngineerId(1));
    const param2 = new UnlockAchievement(new UnlockAchievementId(2), new AchievementId(12), new EngineerId(2));
    const param3 = new UnlockAchievement(new UnlockAchievementId(3), new AchievementId(13), new EngineerId(3));
    const unlockAchievements = new UnlockAchievements([param1, param2, param3]);

    // 処理
    const result = unlockAchievements.unlockedAchievementIds();

    // 出力
    expect(result).toEqual(new UnlockedAchievementIds([new AchievementId(11), new AchievementId(12), new AchievementId(13)]));
  });
});
