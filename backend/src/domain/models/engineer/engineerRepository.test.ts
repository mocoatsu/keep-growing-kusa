import { mockReset } from "jest-mock-extended";
import { prismaMock } from "../../../singleton";
import { Engineer } from "./Engineer";
import { EngineerId } from "./EngineerId";

import { EngineerName } from "./engineerName";
import { EngineerPassword } from "./EngineerPassword";
import { Condition, EngineerRepository } from "./engineerRepository";

beforeEach(() => {
  mockReset(prismaMock);
});

describe("create", () => {
  it("エンジニアを作成できる", async () => {
    // 処理
    prismaMock.engineer.findUnique.mockResolvedValue({ id: 1, name: "unique engineer", password: "pass" });

    new EngineerRepository().create(new Engineer(new EngineerId(1), new EngineerName("test1"), new EngineerPassword("pass")));

    // 出力
    const result = new EngineerRepository().findByPk(new EngineerId(1));
    expect(result).toEqual("");
  });
});

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
    const result = new Condition().name(new EngineerName("testName")).build();

    // 出力
    expect(result).toEqual({
      where: {
        name: "testName",
      },
    });
  });
});
