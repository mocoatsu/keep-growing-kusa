import useSWR from "swr";
import { Achievement } from "../domain/Achievement";
import { getAchievementById } from "../infrastructure/express/api";

type AchievementType = {
  achievement: Achievement;
};

export const useAchievementById = (
  achievementId: string | undefined
): AchievementType => {
  const achievementSWRResponse = useSWR(
    achievementId ? [achievementId] : null,
    getAchievementById,
    {
      suspense: true,
    }
  );

  return {
    achievement: new Achievement(achievementSWRResponse.data),
  };
};
