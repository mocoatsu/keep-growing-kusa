import useSWR from "swr";
import { getAchievementById } from "../infrastructure/express/api";
import { Achievement } from "./useAchievements";

export const useAchievementById = (
  achievementId: string | undefined
): { achievement: Achievement } => {
  const achievementSWRResponse = useSWR(
    achievementId ? [achievementId] : null,
    getAchievementById,
    {
      suspense: true,
    }
  );

  return {
    achievement: achievementSWRResponse.data,
  };
};
