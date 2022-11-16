import useSWR from "swr";
import { getEngineerById } from "../infrastructure/express/api";

export const useEngineerById = (
  engineerId: string | undefined
): { engineer: {id:number,name:string} } => {
  const engineerSWRResponse = useSWR(
    engineerId ? [engineerId] : null,
    getEngineerById,
    {
      suspense: true,
    }
  );

  return {
    engineer: engineerSWRResponse.data,
  };
};
