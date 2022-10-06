import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { LoginContainer } from "../organisms/Login/LoginContainer";

export function LoginTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <LoginContainer></LoginContainer>
      </Suspense>
    </ErrorBoundary>
  );
}
