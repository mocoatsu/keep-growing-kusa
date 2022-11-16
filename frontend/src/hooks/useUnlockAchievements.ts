import useSWR from "swr";
import { unlockAchievement } from "../infrastructure/express/api";

export type Achievement = {
  id: number;
  name: string;
  description: string;
  difficultyLevel: number;
};

export type Achievements = {
  achievements: Achievement[];
};

export const useUnlockAchievements = (): Achievements => {
  // @@ idをセッションから取得できるようにする
  const unlockAchievementSWRResponse = useSWR({ id: "1" }, unlockAchievement, {
    suspense: true,
  });

  console.log("useUnlock");

  return {
    achievements: unlockAchievementSWRResponse.data,
  };
};
