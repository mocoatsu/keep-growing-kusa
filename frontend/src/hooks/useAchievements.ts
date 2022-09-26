import useSWR from "swr";
import { Achievements } from "../domain/Achievements";
import { getAllAchievement } from "../infrastructure/express/api";

type AchievementType = {
  achievements: any;
};

export const useAchievements = (): AchievementType => {
  const achievementSWRResponse = useSWR(
    "/achievements/all",
    getAllAchievement,
    {
      suspense: true,
    }
  );

  return {
    achievements: new Achievements(achievementSWRResponse.data),
  };
};
