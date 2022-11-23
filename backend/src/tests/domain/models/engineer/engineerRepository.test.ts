import prisma from "../../../../client";
import { resetTable } from "../../../initialize";
import { Engineer } from "../../../../domain/models/engineer/Engineer";
import { EngineerId } from "../../../../domain/models/engineer/EngineerId";
import { EngineerName } from "../../../../domain/models/engineer/engineerName";
import { EngineerPassword } from "../../../../domain/models/engineer/EngineerPassword";
import { Condition, EngineerRepository } from "../../../../domain/models/engineer/engineerRepository";

beforeEach(async () => {
  await resetTable();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("create", () => {
  it("エンジニアを作成できる", async () => {
    const result = await new EngineerRepository().create(new Engineer(EngineerId.empty(), new EngineerName("エンジニア"), new EngineerPassword("password")));

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
