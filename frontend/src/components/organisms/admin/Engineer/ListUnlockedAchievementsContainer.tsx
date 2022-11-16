import { useRouter } from "next/router";
import { useUnlockedAchievements } from "../../../../hooks/useUnlockedAchievements";
import { ListUnlockedAchievementsPresenter } from "./ListUnlockedAchievementsPresenter";

export const ListUnlockedAchievementsContainer = () => {
  const router = useRouter();
  const engineerId = router.query.id ? (router.query.id as string) : "";
  const { unlockedAchievements } = useUnlockedAchievements(engineerId);

  return (
    <ListUnlockedAchievementsPresenter
      engineerId={engineerId}
      unlockedachievements={unlockedAchievements}
    />
  );
};
