import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { EnginnerTitle } from "../organisms/EngineerTitle/EnginnerTitle";
import { EnginnerTitleContainer } from "../organisms/EngineerTitle/EnginnerTitleContainer";

export function MypageTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <EnginnerTitleContainer></EnginnerTitleContainer>
      </Suspense>
    </ErrorBoundary>
  );
}
