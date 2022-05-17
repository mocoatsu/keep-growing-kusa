import { request, GraphQLClient } from "graphql-request";

interface graqhQLArgs {
  endpoint: string;
  query: any;
  token: string;
  headers?: Record<string, string>;
  variables?: any;
}
export const graqhQLRequest = (args: graqhQLArgs) => {
  const authorization = `Bearer ${args.token}`;
  return request({
    url: args.endpoint,
    document: args.query,
    variables: args.variables,
    requestHeaders: { ...args.headers, ...{ authorization: authorization } },
  }).then((data) => console.log(data));
};
