import { setupServer } from "msw/node";

import { render } from "@testing-library/react";

import { graphql } from "msw";
import { contributions } from "../mocks/data/contributions";
import { GitHubToken } from "../domain/GitHubToken";
import { Suspense } from "react";
import { ThisWeekActivityContainer } from "../components/organisms/ThisWeekActivity/ThisWeekActivityContainer";

jest.mock("../domain/GitHubToken");
const MockedGitHubToken = GitHubToken as jest.Mock;
const server = setupServer();

beforeAll(() => server.listen());
beforeEach(() => {
  MockedGitHubToken.mockClear;
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("コントリビューション活動が正しく表示される", async () => {
  server.use(
    graphql.query("getContributions", (req, res, ctx) => {
      return res(ctx.data(contributions()));
    })
  );

  render(
    <Suspense fallback={null}>
      <ThisWeekActivityContainer />
    </Suspense>
  );

  // await expect(screen.getByText("Search:")).toBeInTheDocument();
});
