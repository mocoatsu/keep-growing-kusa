import { useAchievements } from "../../../../hooks/useAchievements";
import { ListAchievementPresenter } from "./ListAchievementPresenter";

export const ListAchievementContainer = () => {
  const { achievements } = useAchievements();

  return <ListAchievementPresenter achievements={achievements} />;
};
