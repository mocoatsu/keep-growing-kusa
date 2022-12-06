import useSWR from "swr";
import { Achievement } from "./useAchievements";
import { getUnlockedAchievements } from "../infrastructure/express/api";

export type unlockedAchievementsResponse = {
  unlockedAchievements: Achievement[];
};

export const useUnlockedAchievements = (
  engineerId: string
): unlockedAchievementsResponse => {
  const apiResponse = useSWR(
    engineerId ? engineerId : null,
    getUnlockedAchievements,
    { suspense: true }
  );

  return {
    unlockedAchievements: apiResponse.data,
  };
};
