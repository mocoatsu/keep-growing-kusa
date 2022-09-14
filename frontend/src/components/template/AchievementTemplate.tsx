import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AchievementContainer } from "../organisms/AchievementContainer.tsx/AchievementContainer";

export function AchievementTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <AchievementContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
