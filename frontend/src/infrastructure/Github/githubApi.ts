import "cross-fetch/polyfill";
import { GitHubToken } from "../../domain/GitHubToken";
import { graqhQLClient } from "../GraphQL/graqhQLClient";
import { contributionsQuery, userQuery } from "../GraphQL/query";
import { GetContributionsQuery, getSdk, GetUserQuery } from "../GraphQL/type";

type apiArgs = {
  endpoint: string;
  query: string;
  token: string;
  variables: { userName: string };
};

const variables = { userName: "TheSelfAtu" };

export const fetchContributions = async (): Promise<GetContributionsQuery> => {
  const args: apiArgs = {
    endpoint: "https://api.github.com/graphql",
    query: contributionsQuery,
    token: new GitHubToken().value,
    variables: variables,
  };
  return getSdk(graqhQLClient(args)).getContributions(variables);
};

export const fetchUser = async (): Promise<GetUserQuery> => {
  const args = {
    endpoint: "https://api.github.com/graphql",
    query: userQuery,
    token: new GitHubToken().value,
    variables: variables,
  };
  return getSdk(graqhQLClient(args)).getUser(variables);
};
