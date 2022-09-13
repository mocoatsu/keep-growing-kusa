import useSWR from "swr";
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
  console.log("useAchievements", achievementSWRResponse.data);

  return {
    achievements: achievementSWRResponse.data,
  };
};
