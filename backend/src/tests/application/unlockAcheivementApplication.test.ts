import { UnlockAchievementApplicationService } from "../../application/unlockAchievement/unlokAchievementApplicationService";
import prisma from "../../client";
import { Achievement } from "../../domain/models/achievement/Achievement";
import { AchievementCondition } from "../../domain/models/achievement/AchievementCondition";
import { AchievementId } from "../../domain/models/achievement/AchievementId";
import { AchievementRepository } from "../../domain/models/achievement/achievementRepository";
import { ContributionWeeks } from "../../domain/models/contribution/ContributionWeeks";
import { Engineer } from "../../domain/models/engineer/Engineer";
import { EngineerId } from "../../domain/models/engineer/EngineerId";
import { EngineerName } from "../../domain/models/engineer/engineerName";
import { EngineerPassword } from "../../domain/models/engineer/EngineerPassword";
import { EngineerRepository, Condition as ECondition } from "../../domain/models/engineer/engineerRepository";
import { UnlockAchievement } from "../../domain/models/unlockAchievement/unlockAchievement";
import { UnlockAchievementId } from "../../domain/models/unlockAchievement/unlockAchievementId";
import { UnlockAchievementIds } from "../../domain/models/unlockAchievement/unlockAchievementIds";
import { Condition, UnlockAchievementRepository } from "../../domain/models/unlockAchievement/unlockAchievementRepository";
import { UnlockAchievements } from "../../domain/models/unlockAchievement/UnlockAchievements";
import { UnlockAchievementMaterial } from "../../domain/models/unlockAchievementMaterial/unlockAchievementMaterial";
import { resetTable } from "../initialize";

beforeEach(async () => {
  await resetTable(["Achievement", "UnlockAchievement", "Engineer"]);
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("unlockFullfilledAchievements", () => {
  it("実績解除条件を満たした実績を保存できる", async () => {
    // 入力
    jest.spyOn(AchievementCondition.prototype, "isFullfilled").mockImplementation(() => {
      return true; // 取得した実績がすべて解除条件を満たしているとする
    });
    await new EngineerRepository().create(new Engineer(EngineerId.empty(), new EngineerName("engineer1"), new EngineerPassword("password"))); // UnlockAchievementの外部キー制約を満たす
    await new AchievementRepository().create(Achievement.factoryWithoutId("achievement1", "実績1", 1));
    const unlockAchievementRepository = new UnlockAchievementRepository();
    const materials = new UnlockAchievementMaterial({ contributions: { contributionWeeks: new ContributionWeeks(), total: 1 } });

    // 処理
    const unlockAchievementApplicationService = new UnlockAchievementApplicationService(unlockAchievementRepository);
    await unlockAchievementApplicationService.unlockFullfilledAchievements(1, materials);

    // 出力
    const result = await unlockAchievementRepository.findBy(new Condition().engineerId(new EngineerId(1)));
    expect(result).toEqual(new UnlockAchievements([new UnlockAchievement(new UnlockAchievementId(1), new AchievementId(1), new EngineerId(1))]));
  });
  it("実績解除条件を満たしていない実績は保存しない", async () => {
    // 入力
    jest.spyOn(AchievementCondition.prototype, "isFullfilled").mockImplementation(() => {
      return false;
    });
    await new AchievementRepository().create(Achievement.factoryWithoutId("achievement1", "実績1", 10));
    const unlockAchievementRepository = new UnlockAchievementRepository();
    const materials = new UnlockAchievementMaterial({ contributions: { contributionWeeks: new ContributionWeeks(), total: 100 } });

    // 処理
    const unlockAchievementApplicationService = new UnlockAchievementApplicationService(unlockAchievementRepository);
    await unlockAchievementApplicationService.unlockFullfilledAchievements(1, materials);

    // 出力
    const result = await unlockAchievementRepository.findBy(new Condition().engineerId(new EngineerId(1)));
    expect(result).toEqual(new UnlockAchievements([]));
  });
});
