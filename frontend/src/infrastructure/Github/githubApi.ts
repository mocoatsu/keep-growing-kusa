import "cross-fetch/polyfill";
import { graqhQLClient } from "../GraphQL/graqhQLClient";
import { contributionsQuery, userQuery } from "../GraphQL/query";
import { GetContributionsQuery, getSdk, GetUserQuery } from "../GraphQL/type";

// .env ファイルの内容を環境変数に反映
const token = process.env.NEXT_PUBLIC_MYAPP_GITHUB_TOKEN;
if (typeof token === "undefined") {
  throw new Error("MYAPP_GITHUB_TOKEN cannot be found");
}

const variables = { userName: "TheSelfAtu" };

export const fetchContributions = async (): Promise<GetContributionsQuery> => {
  const args = {
    endpoint: "https://api.github.com/graphql",
    query: contributionsQuery,
    token: token,
    variables: variables,
  };
  return getSdk(graqhQLClient(args)).getContributions(variables);
};

export const fetchUser = async (): Promise<GetUserQuery> => {
  const args = {
    endpoint: "https://api.github.com/graphql",
    query: userQuery,
    token: token,
    variables: variables,
  };
  return getSdk(graqhQLClient(args)).getUser(variables);
};
