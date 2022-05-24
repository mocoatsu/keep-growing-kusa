import "cross-fetch/polyfill"; // グローバルな fetch 関数を定義する
import { graqhQLRequest } from "../GraphQL/graqhQLRequest";
import { contributionsQuery } from "../Github/query";

// .env ファイルの内容を環境変数に反映
const token = process.env.NEXT_PUBLIC_MYAPP_GITHUB_TOKEN;
if (typeof token === "undefined") {
  throw new Error("MYAPP_GITHUB_TOKEN cannot be found");
}

const variables = { userName: "TheSelfAtu" };
export const fetchContributions = async (): Promise<any> => {
  const args = {
    endpoint: "https://api.github.com/graphql",
    query: contributionsQuery,
    token: token,
    variables: variables,
  };
  return graqhQLRequest(args);
};
