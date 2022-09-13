import { apiClient } from "./apiClient";

export const getAllAchievement = (params: string) => {
  return apiClient.get("/achievements/all").then((response) => {
    return response.data;
  });
};
