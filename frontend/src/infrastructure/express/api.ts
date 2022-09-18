import { apiClient } from "./apiClient";

export const getAllAchievement = (path: string) => {
  return apiClient.get(path).then((response) => {
    return response.data;
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
    });
};

export const deleteAchievement = (achivementId: number) => {
  return apiClient
    .delete(`achievements/delete/${achivementId}`)
    .then((response) => {
      return response.data;
    });
};
