import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DashboardContainer } from "../../organisms/admin/Dashboard/DashboardContainer";

export function DashboardTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <DashboardContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
