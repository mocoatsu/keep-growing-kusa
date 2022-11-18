import prisma from "../../../../client";
import { resetTable } from "../../../initialize";
import { AchievementRepository } from "../../../../domain/models/achievement/achievementRepository";
import { Achievement } from "../../../../domain/models/achievement/Achievement";
import { AchievementId } from "../../../../domain/models/achievement/AchievementId";

beforeEach(async () => {
  await resetTable(["Achievement", "UnlockAchievement", "Engineer"]);
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("create", () => {
  it("実績を作成できる", async () => {
    const result = await new AchievementRepository().create(Achievement.factoryWithoutId("実績", "1つ目の実績", 1));

    expect(result).toEqual(new Achievement(new AchievementId(1), "実績", "1つ目の実績", 1));
  });
});
