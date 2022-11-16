import prisma from "../../../../client";
import { resetTable } from "../../../initialize";
import { AchievementRepository } from "../../../../domain/models/achievement/achievementRepository";
import { Achievement } from "../../../../domain/models/achievement/Achievement";
import { AchievementId } from "../../../../domain/models/achievement/AchievementId";

beforeAll(async () => {
  await resetTable(["Achievement", "UnlockAchievement", "Engineer"]);
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("create", () => {
  it("実績を作成できる", async () => {
    // 処理
    await new AchievementRepository().create(Achievement.factoryWithoutId("実績", "1つ目の実績", 1));

    // 出力
    const result = await new AchievementRepository().findByPk(new AchievementId(1));
    expect(result).toEqual(new Achievement(new AchievementId(1), "実績", "1つ目の実績", 1));
  });
});
