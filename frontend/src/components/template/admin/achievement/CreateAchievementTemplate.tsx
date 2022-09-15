import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CreateAchievementContainer } from "../../../organisms/admin/Achievement/CreateAchievementContainer";

export function CreateAchievementTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <CreateAchievementContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
