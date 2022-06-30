import { gql } from "graphql-request";

// 発行する GraphQL クエリ

// コントリビューションを取得するクエリ
export const contributionsQuery = gql`
  query getContributions($userName: String!) {
    user(login: $userName) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

export const userQuery = gql`
  query getUser($userName: String!) {
    user(login: $userName) {
      login # ログインID
      name # ユーザー名
      url # ユーザーの GitHub ホームページ
      websiteUrl # ユーザーの Web サイト
      avatarUrl # ユーザーのアバター画像
    }
  }
`;
