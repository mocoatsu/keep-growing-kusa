import { HStack } from "@chakra-ui/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { CreateAchievementContainer } from "../../../organisms/admin/Achievement/CreateAchievementContainer";
import { DashboardSideBarPresenter } from "../../../organisms/admin/Dashboard/DashboardSideBarPresenter";

export function CreateAchievementTemplate() {
  return (
    <ErrorBoundary fallback={<p>エラー</p>}>
      <Suspense fallback={<div>loading...</div>}>
        <HStack>
          <DashboardSideBarPresenter />
          <CreateAchievementContainer />
        </HStack>
      </Suspense>
    </ErrorBoundary>
  );
}
