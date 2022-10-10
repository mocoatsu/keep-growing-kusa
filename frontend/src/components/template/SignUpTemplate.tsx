import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SignUpContainer } from "../organisms/signup/SignUpContainer";

export function SignUpTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <SignUpContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
