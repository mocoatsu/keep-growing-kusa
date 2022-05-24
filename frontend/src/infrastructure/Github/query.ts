import { request, gql } from "graphql-request";

// 発行する GraphQL クエリ

// コントリビューションを取得するクエリ
export const contributionsQuery = gql`
  query ($userName: String!) {
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
