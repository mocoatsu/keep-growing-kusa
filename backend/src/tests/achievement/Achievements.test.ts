import { Achievement } from "../../domain/models/achievement/achievement";
import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { Achievements } from "../../domain/models/achievement/Achievements";
import { UnlockAchievementId } from "../../domain/models/unlockAchievement/unlockAchievementId";
import { UnlockAchievementIds } from "../../domain/models/unlockAchievement/unlockAchievementIds";

beforeEach(() => {});

describe("locked", () => {
  it("解除されていない実績のみを返す", () => {
    // 入力
    const achievements = new Achievements([
      new Achievement(new AchievementId(1), "test1", "1番目の実績", 1),
      new Achievement(new AchievementId(2), "test2", "2番目の実績", 2),
      new Achievement(new AchievementId(3), "test3", "3番目の実績", 3),
    ]);

    const unlockAchievementIds = new UnlockAchievementIds([
      new UnlockAchievementId(1),
      new UnlockAchievementId(2),
    ]);

    // 処理
    const result = achievements.locked(unlockAchievementIds);

    // 出力
    expect(result).toEqual(
      new Achievements([
        new Achievement(new AchievementId(3), "test3", "3番目の実績", 3),
      ])
    );
  });
  it("解除されていない実績が一つもない場合", () => {
    // 入力
    const achievements = new Achievements([
      new Achievement(new AchievementId(1), "test1", "1番目の実績", 1),
      new Achievement(new AchievementId(2), "test2", "2番目の実績", 2),
      new Achievement(new AchievementId(3), "test3", "3番目の実績", 3),
    ]);

    const unlockAchievementIds = new UnlockAchievementIds([
      new UnlockAchievementId(1),
      new UnlockAchievementId(2),
      new UnlockAchievementId(3),
    ]);

    // 処理
    const result = achievements.locked(unlockAchievementIds);

    // 出力
    expect(result).toEqual(new Achievements([]));
  });
  it("idがない実績がある場合にエラーを投げる", () => {
    // 入力
    const achievements = new Achievements([
      new Achievement(null, "test1", "1番目の実績", 1),
      new Achievement(new AchievementId(2), "test2", "2番目の実績", 2),
    ]);

    const unlockAchievementIds = new UnlockAchievementIds([
      new UnlockAchievementId(1),
      new UnlockAchievementId(2),
    ]);

    // 出力
    expect(() => {
      achievements.locked(unlockAchievementIds);
    }).toThrow();
  });
});
