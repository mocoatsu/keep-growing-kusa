import { Suspense } from "react";
import { ContributionProfileContainer } from "./ContributionProfileContainer";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

export const ContributionProfile = () => {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <ContributionProfileContainer></ContributionProfileContainer>
      </Suspense>
    </ErrorBoundary>
  );
};
