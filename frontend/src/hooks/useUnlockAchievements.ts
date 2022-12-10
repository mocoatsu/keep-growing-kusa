import useSWR from "swr";
import { unlockAchievement } from "../infrastructure/express/api";
import { Achievement } from "./useAchievements";

export type unlockAchievementResponse = {
  newUnlockedAchievements: Achievement[];
  unlockedAchievements: Achievement[];
};

/** 実績を解除する */
export const useUnlockAchievements = (): unlockAchievementResponse => {
  const apiResponse = useSWR("achievements/unlock", unlockAchievement, {
    suspense: true,
  });

  return {
    newUnlockedAchievements: apiResponse.data.newUnlockedAchievements,
    unlockedAchievements: apiResponse.data.unlockedAchievements,
  };
};
