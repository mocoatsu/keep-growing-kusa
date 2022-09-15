import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ListAchievementContainer } from "../../../organisms/admin/Achievement/ListAchievementContainer";

export function ListAchievementTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <ListAchievementContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
