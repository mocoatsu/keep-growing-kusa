import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ThisWeekActivityContainer } from "../organisms/ThisWeekActivity/ThisWeekActivityContainer";

export function ActivityTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <ThisWeekActivityContainer></ThisWeekActivityContainer>
      </Suspense>
    </ErrorBoundary>
  );
}
