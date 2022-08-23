import { GraphQLClient } from "graphql-request";

interface graqhQLArgs {
  endpoint: string;
  query: any;
  token: string;
  variables: { userName: string };
}

export const graqhQLClient = (args: graqhQLArgs): GraphQLClient => {
  const config = {
    authorization: `Bearer ${args.token}`,
    "Content-Type": "application/json",
  };

  return new GraphQLClient(args.endpoint, { headers: config });
};
