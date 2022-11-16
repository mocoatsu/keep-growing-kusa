import { HStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { EditAchievementContainer } from "../../../organisms/admin/Achievement/EditAchievementContainer";
import { DashboardSideBarPresenter } from "../../../organisms/admin/Dashboard/DashboardSideBarPresenter";

export function EditAchievementTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <HStack>
          <DashboardSideBarPresenter />
          <EditAchievementContainer />
        </HStack>
      </Suspense>
    </ErrorBoundary>
  );
}
