import { HStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DashboardSideBarPresenter } from "../../../organisms/admin/Dashboard/DashboardSideBarPresenter";
import { EditEngineerContainer } from "../../../organisms/admin/Engineer/EditEngineerContainer";

export function EditEngineerTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <HStack>
          <DashboardSideBarPresenter />
          <EditEngineerContainer />
        </HStack>
      </Suspense>
    </ErrorBoundary>
  );
}
