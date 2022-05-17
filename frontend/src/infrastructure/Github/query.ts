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

const query = gql`
  {
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }
`;

request("https://api.graph.cool/simple/v1/movies", query).then((data) =>
  console.log(data)
);
