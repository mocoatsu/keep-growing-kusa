import prisma from "../../../../client";
import { resetTable } from "../../../initialize";
import { Engineer } from "../../../../domain/models/engineer/Engineer";
import { EngineerId } from "../../../../domain/models/engineer/EngineerId";
import { EngineerName } from "../../../../domain/models/engineer/engineerName";
import { EngineerPassword } from "../../../../domain/models/engineer/EngineerPassword";
import { EngineerRepository } from "../../../../domain/models/engineer/engineerRepository";
import { AchievementRepository } from "../../../../domain/models/achievement/achievementRepository";
import { Achievement } from "../../../../domain/models/achievement/Achievement";
import { AchievementId } from "../../../../domain/models/achievement/AchievementId";
import { Condition, UnlockAchievementRepository } from "../../../../domain/models/unlockAchievement/unlockAchievementRepository";
import { UnlockAchievementId } from "../../../../domain/models/unlockAchievement/unlockAchievementId";
import { UnlockAchievements } from "../../../../domain/models/unlockAchievement/UnlockAchievements";
import { UnlockAchievement } from "../../../../domain/models/unlockAchievement/unlockAchievement";

beforeEach(async () => {
  await resetTable();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("create", () => {
  it("解除実績を作成できる", async () => {
    // 入力
    await new EngineerRepository().create(new Engineer(EngineerId.empty(), new EngineerName("engineer"), new EngineerPassword("password")));
    await new AchievementRepository().create(Achievement.factoryWithoutId("achievement1", "実績1", 1));

    // 処理
    const result = await new UnlockAchievementRepository().create(new UnlockAchievements([new UnlockAchievement(new UnlockAchievementId(1), new AchievementId(1), new EngineerId(1))]));

    // 結果
    expect(result).toBe(1);
  });
});

describe("delete", () => {
  it("解除実績を削除できる", async () => {
    // 入力
    await new EngineerRepository().create(new Engineer(EngineerId.empty(), new EngineerName("engineer"), new EngineerPassword("password")));
    await new AchievementRepository().create(Achievement.factoryWithoutId("achievement1", "実績1", 1));
    await new AchievementRepository().create(Achievement.factoryWithoutId("achievement2", "実績2", 1));
    await new UnlockAchievementRepository().create(new UnlockAchievements([new UnlockAchievement(new UnlockAchievementId(1), new AchievementId(1), new EngineerId(1))]));
    await new UnlockAchievementRepository().create(new UnlockAchievements([new UnlockAchievement(new UnlockAchievementId(2), new AchievementId(2), new EngineerId(1))]));

    // 処理
    await new UnlockAchievementRepository().delete(new AchievementId(1), new EngineerId(1));

    // 出力
    const result = await new UnlockAchievementRepository().findBy(new Condition());
    expect(result).toEqual(new UnlockAchievements([new UnlockAchievement(new UnlockAchievementId(2), new AchievementId(2), new EngineerId(1))]));
  });
});
