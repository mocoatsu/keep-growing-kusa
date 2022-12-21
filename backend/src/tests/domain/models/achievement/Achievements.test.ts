import { expect, jest, test } from "@jest/globals";

import { Achievement } from "../../../../domain/models/achievement/Achievement";
import { AchievementCondition } from "../../../../domain/models/achievement/AchievementCondition";
import { AchievementId } from "../../../../domain/models/achievement/AchievementId";
import { Achievements } from "../../../../domain/models/achievement/Achievements";
import { ContributionWeeks } from "../../../../domain/models/contribution/ContributionWeeks";
import { UnlockedAchievementIds } from "../../../../domain/models/unlockAchievement/unlockAchievementIds";
import { UnlockAchievementMaterial } from "../../../../domain/models/unlockAchievementMaterial/unlockAchievementMaterial";

beforeEach(() => {});

describe("locked", () => {
  it("解除されていない実績のみを返す", () => {
    // 入力
    const achievements = new Achievements([new Achievement(new AchievementId(1), "test1", "1番目の実績", 1), new Achievement(new AchievementId(2), "test2", "2番目の実績", 2), new Achievement(new AchievementId(3), "test3", "3番目の実績", 3)]);

    const unlockAchievementIds = new UnlockedAchievementIds([new AchievementId(1), new AchievementId(2)]);

    // 処理
    const result = achievements.locked(unlockAchievementIds);

    // 出力
    expect(result).toEqual(new Achievements([new Achievement(new AchievementId(3), "test3", "3番目の実績", 3)]));
  });
  it("解除されていない実績が一つもない場合", () => {
    // 入力
    const achievements = new Achievements([new Achievement(new AchievementId(1), "test1", "1番目の実績", 1), new Achievement(new AchievementId(2), "test2", "2番目の実績", 2), new Achievement(new AchievementId(3), "test3", "3番目の実績", 3)]);

    const unlockAchievementIds = new UnlockedAchievementIds([new AchievementId(1), new AchievementId(2), new AchievementId(3)]);

    // 処理
    const result = achievements.locked(unlockAchievementIds);

    // 出力
    expect(result).toEqual(new Achievements([]));
  });
  it("idがない実績がある場合にエラーを投げる", () => {
    // 入力
    const achievements = new Achievements([new Achievement(null, "test1", "1番目の実績", 1), new Achievement(new AchievementId(2), "test2", "2番目の実績", 2)]);

    const unlockAchievementIds = new UnlockedAchievementIds([new AchievementId(1), new AchievementId(2)]);

    // 出力
    expect(() => {
      achievements.locked(unlockAchievementIds);
    }).toThrow();
  });
});

describe("filledCondition", () => {
  it("実績解除条件を満たしたものを返す", () => {
    // 入力
    jest.spyOn(AchievementCondition.prototype, "isFullfilled").mockImplementation(() => {
      return true;
    });

    const achievements = new Achievements([
      new Achievement(new AchievementId(1), "test1", "1番目の実績", 1),
      // TODO：2つ目以降の実績を実装したら有効化
      // new Achievement(new AchievementId(2), "test2", "2番目の実績", 2),
      // new Achievement(new AchievementId(3), "test3", "3番目の実績", 3),
    ]);

    const materials = new UnlockAchievementMaterial({
      contributions: {
        contributionWeeks: new ContributionWeeks(),
        total: 1,
      },
    });

    // 処理
    const result = achievements.filledCondition(materials);

    // 出力
    expect(result).toEqual(new Achievements([new Achievement(new AchievementId(1), "test1", "1番目の実績", 1)]));
  });
  it("一つも実績解除条件を満たさない場合", () => {
    // 入力
    jest.spyOn(AchievementCondition.prototype, "isFullfilled").mockImplementation(() => {
      return false;
    });

    const achievements = new Achievements([
      new Achievement(new AchievementId(1), "test1", "1番目の実績", 1),
      // TODO：2つ目以降の実績を実装したら有効化
      // new Achievement(new AchievementId(2), "test2", "2番目の実績", 2),
      // new Achievement(new AchievementId(3), "test3", "3番目の実績", 3),
    ]);

    const materials = new UnlockAchievementMaterial({
      contributions: {
        contributionWeeks: new ContributionWeeks(),
        total: 1,
      },
    });

    // 処理
    const result = achievements.filledCondition(materials);

    // 出力
    expect(result).toEqual(new Achievements([]));
  });
});
