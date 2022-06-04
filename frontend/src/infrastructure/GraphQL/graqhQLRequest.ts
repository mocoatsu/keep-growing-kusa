import { request, GraphQLClient } from "graphql-request";
import { getSdk } from "./type";

interface graqhQLArgs {
  endpoint: string;
  query: any;
  token: string;
  variables?: any;
}

export const graqhQLRequest = (args: graqhQLArgs): Promise<any> => {
  const config = {
    authorization: `Bearer ${args.token}`,
    "Content-Type": "application/json",
  };

  const client = getSdk(new GraphQLClient(args.endpoint, { headers: config }));
  client.getContributions({ userName: "TheSelfAtu" }).then((v) => {
    v.user?.contributionsCollection;
  });
  return request({
    url: args.endpoint,
    document: args.query,
    variables: args.variables,
    requestHeaders: { ...config },
  })
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e.data);
    });
};
