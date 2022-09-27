import useSWR from "swr";
import { getAllAchievement } from "../infrastructure/express/api";

export type Achievement = {
  id: number;
  name: string;
  description: string;
  difficultyLevel: number;
};

export type Achievements = {
  achievements: Achievement[];
};

export const useAchievements = (): Achievements => {
  const achievementSWRResponse = useSWR(
    "/achievements/all",
    getAllAchievement,
    {
      suspense: true,
    }
  );

  return {
    achievements: achievementSWRResponse.data,
  };
};
