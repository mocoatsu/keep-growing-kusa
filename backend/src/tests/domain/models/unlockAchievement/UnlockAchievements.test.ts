import { AchievementId } from "../../../../domain/models/achievement/AchievementId";
import { EngineerId } from "../../../../domain/models/engineer/EngineerId";
import { UnlockAchievement } from "../../../../domain/models/unlockAchievement/unlockAchievement";
import { UnlockAchievementId } from "../../../../domain/models/unlockAchievement/unlockAchievementId";
import { UnlockAchievementIds } from "../../../../domain/models/unlockAchievement/unlockAchievementIds";
import { UnlockAchievements } from "../../../../domain/models/unlockAchievement/UnlockAchievements";

beforeEach(() => {});

describe("ids", () => {
  it("実績のIDを返すことが出来る", () => {
    // 入力
    const param1 = new UnlockAchievement(new UnlockAchievementId(1), new AchievementId(1), new EngineerId(1));
    const param2 = new UnlockAchievement(new UnlockAchievementId(2), new AchievementId(2), new EngineerId(2));
    const param3 = new UnlockAchievement(new UnlockAchievementId(3), new AchievementId(3), new EngineerId(3));
    const unlockAchievements = new UnlockAchievements([param1, param2, param3]);

    // 処理
    const result = unlockAchievements.ids();

    // 出力
    expect(result).toEqual(new UnlockAchievementIds([new UnlockAchievementId(1), new UnlockAchievementId(2), new UnlockAchievementId(3)]));
  });
  it("実績のIDがnullの実績は含めない", () => {
    // 入力
    const param1 = new UnlockAchievement(null, new AchievementId(1), new EngineerId(1));
    const param2 = new UnlockAchievement(new UnlockAchievementId(2), new AchievementId(2), new EngineerId(2));
    const param3 = new UnlockAchievement(new UnlockAchievementId(3), new AchievementId(3), new EngineerId(3));
    const unlockAchievements = new UnlockAchievements([param1, param2, param3]);

    // 処理
    const result = unlockAchievements.ids();

    // 出力
    expect(result).toEqual(new UnlockAchievementIds([new UnlockAchievementId(2), new UnlockAchievementId(3)]));
  });
});
