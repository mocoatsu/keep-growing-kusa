import { HStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ListAchievementContainer } from "../../../organisms/admin/Achievement/ListAchievementContainer";
import { DashboardSideBarPresenter } from "../../../organisms/admin/Dashboard/DashboardSideBarPresenter";

export function ListAchievementTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <HStack>
          <DashboardSideBarPresenter />
          <ListAchievementContainer />
        </HStack>
      </Suspense>
    </ErrorBoundary>
  );
}
