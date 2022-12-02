import * as argon2 from "argon2";
import { expect } from "@jest/globals";
import { EngineerRepository } from "../../../../domain/models/engineer/engineerRepository";
import { EngineerService } from "../../../../domain/services/engineerService";
import { Engineer } from "../../../../domain/models/engineer/Engineer";
import { EngineerId } from "../../../../domain/models/engineer/EngineerId";
import { EngineerName } from "../../../../domain/models/engineer/engineerName";
import { EngineerPassword } from "../../../../domain/models/engineer/EngineerPassword";

beforeEach(() => {});

describe("hashEngineerPassword", () => {
  it("hash化されたpasswordを返す", async () => {
    // 入力
    const engineerService = new EngineerService(new EngineerRepository());

    // 処理
    const result = await engineerService.hashEngineerPassword("pass");

    // 出力
    expect(await argon2.verify(result.value(), "pass")).toBe(true);
  });
});

describe("isLoginConditionFilled", () => {
  it("ユーザ名に対するパスワードの検証ができる", async () => {
    // 入力
    const engineerService = new EngineerService(new EngineerRepository());

    const name = new EngineerName("test");
    const encryptedPassword = await engineerService.hashEngineerPassword("password");
    await new EngineerRepository().create(new Engineer(EngineerId.empty(), name, encryptedPassword));

    // 処理
    const correct = await engineerService.isLoginConditionFilled(name, new EngineerPassword("password"));
    const wrong = await engineerService.isLoginConditionFilled(name, new EngineerPassword("wrong password"));

    // 出力
    expect(correct).toBe(true);
    expect(wrong).toBe(false);
  });
});
