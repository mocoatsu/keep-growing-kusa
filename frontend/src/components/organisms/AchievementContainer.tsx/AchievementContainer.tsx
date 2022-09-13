import { useAchievements } from "../../../hooks/useAchievements";
import { AchievementPresenter } from "./AchievementPresenter";

export const AchievementContainer = () => {
  const { achievements } = useAchievements();

  return <AchievementPresenter></AchievementPresenter>;
};
