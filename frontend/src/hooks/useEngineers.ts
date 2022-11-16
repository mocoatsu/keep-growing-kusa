import useSWR from "swr";
import { getAllEngineers } from "../infrastructure/express/api";

export type Engineer = {
  id: number;
  name: string;
};

export type Engineers = {
  engineers: Engineer[];
};

export const useEngineers = (): Engineers => {
  const engineerSWRResponse = useSWR("/engineers/all", getAllEngineers, {
    suspense: true,
  });

  return {
    engineers: engineerSWRResponse.data,
  };
};
