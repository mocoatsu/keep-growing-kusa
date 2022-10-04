import { EngineerLevel } from "../../../../domain/models/engineerLevel/EngineerLevel";
import { EngineerLevelId } from "../../../../domain/models/engineerLevel/EngineerLevelId";

beforeEach(() => {});

describe("fromId", () => {
  it("idに対応したエンジニアレベルを取得できる", () => {
    // 入力
    const id1 = new EngineerLevelId(1);
    const id2 = new EngineerLevelId(2);
    const id3 = new EngineerLevelId(3);
    const id4 = new EngineerLevelId(4);
    const id5 = new EngineerLevelId(5);

    // 処理
    const level1 = EngineerLevel.fromId(id1);
    const level2 = EngineerLevel.fromId(id2);
    const level3 = EngineerLevel.fromId(id3);
    const level4 = EngineerLevel.fromId(id4);
    const level5 = EngineerLevel.fromId(id5);

    // 出力
    expect(level1).toEqual(EngineerLevel.JUNIOR_LEVEL);
    expect(level1.level).toBe(1);
    expect(level1.title.value()).toBe("初心者エンジニア");

    expect(level2).toEqual(EngineerLevel.MIDDLE_LEVEL);
    expect(level2.level).toBe(2);
    expect(level2.title.value()).toBe("若手のホープ");

    expect(level3).toEqual(EngineerLevel.SENIOR_LEVEL);
    expect(level3.level).toBe(3);
    expect(level3.title.value()).toBe("つよつよエンジニア");

    expect(level4).toEqual(EngineerLevel.LEADER_LEVEL);
    expect(level4.level).toBe(4);
    expect(level4.title.value()).toBe("みんなのヒーロー");

    expect(level5).toEqual(EngineerLevel.SUPER_LEVEL);
    expect(level5.level).toBe(5);
    expect(level5.title.value()).toBe("世界的なスーバーエンジニア");
  });
  it("存在しない実績IDを指定するとエラーを投げる", () => {
    // 入力
    const id = new EngineerLevelId(100);

    // 処理・出力
    expect(() => {
      EngineerLevel.fromId(id);
    }).toThrow();
  });
});

describe("fromContributionsCount", () => {
  it("コントリビューション数に対応したエンジニアレベルを取得できる", () => {
    // 処理
    const level0 = EngineerLevel.fromContributionsCount(0);
    const level1 = EngineerLevel.fromContributionsCount(50);
    const level2 = EngineerLevel.fromContributionsCount(99);

    const level3 = EngineerLevel.fromContributionsCount(100);
    const level4 = EngineerLevel.fromContributionsCount(101);
    const level5 = EngineerLevel.fromContributionsCount(499);

    const level6 = EngineerLevel.fromContributionsCount(500);
    const level7 = EngineerLevel.fromContributionsCount(501);
    const level8 = EngineerLevel.fromContributionsCount(999);

    const level9 = EngineerLevel.fromContributionsCount(1000);
    const level10 = EngineerLevel.fromContributionsCount(1001);
    const level11 = EngineerLevel.fromContributionsCount(4999);

    const level12 = EngineerLevel.fromContributionsCount(5000);
    const level13 = EngineerLevel.fromContributionsCount(5001);

    // 出力
    expect(level0).toEqual(EngineerLevel.JUNIOR_LEVEL);
    expect(level1).toEqual(EngineerLevel.JUNIOR_LEVEL);
    expect(level2).toEqual(EngineerLevel.JUNIOR_LEVEL);
    expect(level3).toEqual(EngineerLevel.MIDDLE_LEVEL);
    expect(level4).toEqual(EngineerLevel.MIDDLE_LEVEL);
    expect(level5).toEqual(EngineerLevel.MIDDLE_LEVEL);
    expect(level6).toEqual(EngineerLevel.SENIOR_LEVEL);
    expect(level7).toEqual(EngineerLevel.SENIOR_LEVEL);
    expect(level8).toEqual(EngineerLevel.SENIOR_LEVEL);
    expect(level9).toEqual(EngineerLevel.LEADER_LEVEL);
    expect(level10).toEqual(EngineerLevel.LEADER_LEVEL);
    expect(level11).toEqual(EngineerLevel.LEADER_LEVEL);
    expect(level12).toEqual(EngineerLevel.SUPER_LEVEL);
    expect(level13).toEqual(EngineerLevel.SUPER_LEVEL);
  });
  it("負の数が入った場合", () => {
    // 処理・出力
    expect(EngineerLevel.fromContributionsCount(-1)).toEqual(
      EngineerLevel.JUNIOR_LEVEL
    );
  });
});
