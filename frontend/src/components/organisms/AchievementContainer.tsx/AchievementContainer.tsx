import { useAchievements } from "../../../hooks/useAchievements";
import { useContribution2 } from "../../../hooks/useContribuitons2";
import { AchievementPresenter } from "./AchievementPresenter";

export const AchievementContainer = () => {
  const { achievements } = useAchievements();

  // const {} = useContribution2();
  useContribution2();

  return (
    <AchievementPresenter achievements={achievements}></AchievementPresenter>
  );
};
