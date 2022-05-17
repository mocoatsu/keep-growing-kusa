import "cross-fetch/polyfill"; // グローバルな fetch 関数を定義する
import * as dotenv from "dotenv";
import { graqhQLRequest } from "../GraphQL/request";
import { contributionsQuery } from "../Github/query";

// .env ファイルの内容を環境変数に反映
dotenv.config();

const token = process.env.MYAPP_GITHUB_TOKEN;
if (typeof token === "undefined") {
  throw new Error("MYAPP_GITHUB_TOKEN cannot be found");
}

const headers = { authorization: `Bearer ${token}` };

export const fetchContributions = (): Promise<any> => {
  const args = {
    endpoint: "https://api.github.com/graphql",
    query: contributionsQuery,
    token: token,
  };
  return graqhQLRequest(args);
};
