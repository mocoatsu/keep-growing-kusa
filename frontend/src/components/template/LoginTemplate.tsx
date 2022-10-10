import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { LoginContainer } from "../organisms/login/LoginContainer";

export function LoginTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <LoginContainer />
      </Suspense>
    </ErrorBoundary>
  );
}
