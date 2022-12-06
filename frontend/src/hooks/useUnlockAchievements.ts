import useSWR from "swr";
import { unlockAchievement } from "../infrastructure/express/api";
import { Achievement } from "./useAchievements";

export type unlockAchievementResponse = {
  newUnlockedAchievements: Achievement[];
  unlockedAchievements: Achievement[];
};

/**ユーザー側で使用される*/
export const useUnlockAchievements = (
  engineerId: string
): unlockAchievementResponse => {
  const apiResponse = useSWR(
    engineerId ? engineerId : null,
    unlockAchievement,
    { suspense: true }
  );

  return {
    newUnlockedAchievements: apiResponse.data.newUnlockedAchievements,
    unlockedAchievements: apiResponse.data.unlockedAchievements,
  };
};
