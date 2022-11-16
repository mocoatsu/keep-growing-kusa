import { AchievementCondition } from "../../../../domain/models/achievement/AchievementCondition";
import { AchievementId } from "../../../../domain/models/achievement/AchievementId";

beforeEach(() => {});

describe("fromId", () => {
  it("実績IDの実績解除条件を取得できる", () => {
    // 入力
    const id = new AchievementId(1);

    // 処理
    const result = AchievementCondition.fromId(id);

    // 出力
    expect(result).toEqual(AchievementCondition.FIRST_CONTRIBUTION);
  });
  it("存在しない実績IDを指定するとエラーを投げる", () => {
    // 入力
    const id = new AchievementId(1000);

    // 処理・出力
    expect(() => {
      AchievementCondition.fromId(id);
    }).toThrow();
  });
});
