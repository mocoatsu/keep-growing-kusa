import { HStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DashboardSideBarPresenter } from "../../../organisms/admin/Dashboard/DashboardSideBarPresenter";
import { ListEngineerContainer } from "../../../organisms/admin/Engineer/ListEngineerContainer";

export function ListEngineerTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <HStack>
          <DashboardSideBarPresenter />
          <ListEngineerContainer />
        </HStack>
      </Suspense>
    </ErrorBoundary>
  );
}
