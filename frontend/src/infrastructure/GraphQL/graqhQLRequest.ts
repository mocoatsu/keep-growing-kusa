import { GraphQLClient } from "graphql-request";
import { getSdk } from "./type";

interface graqhQLArgs {
  endpoint: string;
  query: any;
  token: string;
  variables: { userName: string };
}

export const graqhQLRequest = async (args: graqhQLArgs): Promise<any> => {
  const config = {
    authorization: `Bearer ${args.token}`,
    "Content-Type": "application/json",
  };

  const client = getSdk(new GraphQLClient(args.endpoint, { headers: config }));
  return client
    .getContributions(args.variables, config)
    .then((response) => {
      return response;
    })
    .catch((e) => {
      throw new Error(e.data);
    });
};
