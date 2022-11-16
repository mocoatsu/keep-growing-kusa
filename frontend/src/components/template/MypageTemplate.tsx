import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { EngineerTitleContainer } from "../organisms/EngineerTitle/EngineerTitleContainer";

export function MypageTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <EngineerTitleContainer></EngineerTitleContainer>
      </Suspense>
    </ErrorBoundary>
  );
}
