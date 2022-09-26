import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { EditAchievementContainer } from "../../../organisms/admin/Achievement/EditAchievementContainer";

export function EditAchievementTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <EditAchievementContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
