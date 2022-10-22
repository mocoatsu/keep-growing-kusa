import * as argon2 from "argon2";
import { expect } from "@jest/globals";
import { EngineerRepository } from "../../../../domain/models/engineer/engineerRepository";
import { EngineerService } from "../../../../domain/services/engineerService";

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
