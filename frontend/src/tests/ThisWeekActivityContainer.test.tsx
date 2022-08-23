import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";

import { graphql } from "msw";
import { contributions } from "../mocks/data/contributions";
import { GitHubToken } from "../domain/GitHubToken";
import { Suspense } from "react";
import { ThisWeekActivityContainer } from "../components/organisms/ThisWeekActivity/ThisWeekActivityContainer";
import { ErrorBoundary } from "react-error-boundary";

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
      return res(ctx.data(contributions));
    })
  );

  render(
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={null}>
        <ThisWeekActivityContainer />
      </Suspense>
    </ErrorBoundary>
  );

  await expect(screen.findByText("今日")).resolves.toBeInTheDocument();
  await expect(screen.findByText("今週")).resolves.toBeInTheDocument();
});
