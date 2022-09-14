import { apiClient } from "./apiClient";

export const getAllAchievement = (path: string) => {
  return apiClient.get(path).then((response) => {
    return response.data;
  });
};
