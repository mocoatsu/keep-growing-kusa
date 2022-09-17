import { apiClient } from "./apiClient";

export const getAllAchievement = (path: string) => {
  return apiClient.get(path).then((response) => {
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
