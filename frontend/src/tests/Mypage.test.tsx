import { setupServer } from "msw/node";

import { render } from "@testing-library/react";
import { ThisWeekActivityContainer } from "../components/organisms/ThisWeekActivity/ThisWeekActivityContainer";

import { graphql } from "msw";

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("コントリビューション活動が正しく表示される", async () => {
  server.use(
    graphql.query("getContributions", (req, res, ctx) => {
      return res(
        ctx.data({
          user: {
            username: "testuser",
            firstName: "John",
          },
        })
      );
    })
  );

  render(<ThisWeekActivityContainer />);
});
