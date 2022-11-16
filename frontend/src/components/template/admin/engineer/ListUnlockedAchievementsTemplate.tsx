import { HStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DashboardSideBarPresenter } from "../../../organisms/admin/Dashboard/DashboardSideBarPresenter";
import { ListUnlockedAchievementsContainer } from "../../../organisms/admin/Engineer/ListUnlockedAchievementsContainer";

export function ListUnlockedAchievementsTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <HStack>
          <DashboardSideBarPresenter />
          <ListUnlockedAchievementsContainer />
        </HStack>
      </Suspense>
    </ErrorBoundary>
  );
}
