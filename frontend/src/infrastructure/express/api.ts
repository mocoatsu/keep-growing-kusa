import { AxiosError } from "axios";
import { apiClient } from "./apiClient";

export type RequestAuth = {
  name: string;
  password: string;
};

export type RequestAchievement = {
  name: string;
  description: string;
  difficultyLevel: number;
};

export const session = async () => {
  return await apiClient
    .get("/auth")
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};

export const signup = async (form: RequestAuth) => {
  return await apiClient
    .post("/auth/signup", {
      name: form.name,
      password: form.password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};

export const login = async (form: RequestAuth) => {
  return await apiClient
    .post("/auth/login", {
      name: form.name,
      password: form.password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};

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

export const getAchievementById = async (achivementId: String) => {
  return await apiClient
    .get(`/achievements/${achivementId}`)
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};

export const editAchievementById = async (
  achivementId: Number,
  params: RequestAchievement
) => {
  return await apiClient
    .put(`/achievements/edit/${achivementId}`, params)
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

export const fetchContributions = (useId: number) => {
  return apiClient
    .get(`contributions`)
    .then((response) => {
      return response.data;
    })
    .catch((e: AxiosError) => {
      throw Error(e.message);
    });
};
