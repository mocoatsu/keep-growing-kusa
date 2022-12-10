import { useAchievements } from "../../../hooks/useAchievements";
import { useUnlockAchievements } from "../../../hooks/useUnlockAchievements";
import { AchievementPresenter } from "./AchievementPresenter";

export const AchievementContainer = () => {
  const { achievements } = useAchievements();
  const { newUnlockedAchievements, unlockedAchievements } =
    useUnlockAchievements();

  return (
    <AchievementPresenter achievements={achievements}></AchievementPresenter>
  );
};
