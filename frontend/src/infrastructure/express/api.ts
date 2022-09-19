import { AxiosError } from "axios";
import { apiClient } from "./apiClient";

export const getAllAchievement = async (path: string) => {
  return await apiClient
    .get(path)
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};

export const createAchievement = (achievement: {
  name: string;
  description: string;
  difficultyLevel: number;
}) => {
  return apiClient
    .post(`achievements/create`, {
      name: achievement.name,
      description: achievement.description,
      difficultyLevel: achievement.difficultyLevel,
    })
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};

export const deleteAchievement = (achivementId: number) => {
  return apiClient
    .delete(`achievements/delete/${achivementId}`)
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};
