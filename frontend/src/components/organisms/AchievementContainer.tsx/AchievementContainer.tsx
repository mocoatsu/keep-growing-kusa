import { useRouter } from "next/router";
import { useAchievements } from "../../../hooks/useAchievements";
import { useUnlockAchievements } from "../../../hooks/useUnlockAchievements";
import { AchievementPresenter } from "./AchievementPresenter";

export const AchievementContainer = () => {
  const router = useRouter();
  const engineerId = router.query.id ? (router.query.id as string) : "";

  const { achievements } = useAchievements();
  const { newUnlockedAchievements, unlockedAchievements } =
    useUnlockAchievements(engineerId);

  return (
    <AchievementPresenter achievements={achievements}></AchievementPresenter>
  );
};
