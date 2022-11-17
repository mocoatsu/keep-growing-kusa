import prisma from "../../../../client";
import { resetTable } from "../../../initialize";
import { Engineer } from "../../../../domain/models/engineer/Engineer";
import { EngineerId } from "../../../../domain/models/engineer/EngineerId";
import { EngineerName } from "../../../../domain/models/engineer/engineerName";
import { EngineerPassword } from "../../../../domain/models/engineer/EngineerPassword";
import { Condition, EngineerRepository } from "../../../../domain/models/engineer/engineerRepository";

beforeEach(async () => {
  return resetTable(["Achievement", "UnlockAchievement", "Engineer"]);
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("create", () => {
  it.only("エンジニアを作成できる", async () => {
    // 処理
    await new EngineerRepository().create(new Engineer(EngineerId.empty(), new EngineerName("エンジニア"), new EngineerPassword("password")));

    // 出力
    const result = await new EngineerRepository().findByPk(new EngineerId(1));
    expect(result).toEqual(new Engineer(new EngineerId(1), new EngineerName("エンジニア"), EngineerPassword.empty()));
  });
});

describe("Condition", () => {
  it("where句を生成できる", () => {
    // 処理
    const result = new Condition().build();

    // 出力
    expect(result).toEqual({ where: {} });
  });
  it("エンジニア名を検索条件にする", () => {
    // 処理
    const result = new Condition().name(new EngineerName("John")).build();

    // 出力
    expect(result).toEqual({ where: { name: "John" } });
  });
});
