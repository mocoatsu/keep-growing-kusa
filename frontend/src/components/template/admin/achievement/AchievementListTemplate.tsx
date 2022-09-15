import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AchievementListContainer } from "../../../organisms/admin/Achievement/AchievementListContainer";

export function AchievementListTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <AchievementListContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
