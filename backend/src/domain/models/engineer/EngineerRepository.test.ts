import { EngineerId } from "./engineerId";
import { Condition } from "./EngineerRepository";

describe("Condition", () => {
  it("where句を生成できる", () => {
    // 処理
    const result = new Condition().build();

    // 出力
    expect(result).toEqual({
      where: {},
    });
  });
  it("エンジニア名を検索条件にする", () => {
    // 処理
    const result = new Condition().name("testName").build();

    // 出力
    expect(result).toEqual({
      where: {
        name: "testName",
      },
    });
  });
});
