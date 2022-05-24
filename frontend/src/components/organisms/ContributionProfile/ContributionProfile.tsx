import { Suspense } from "react";
import { ContributionProfileContainer } from "./ContributionProfileContainer";

export const ContributionProfile = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ContributionProfileContainer></ContributionProfileContainer>
    </Suspense>
  );
};
