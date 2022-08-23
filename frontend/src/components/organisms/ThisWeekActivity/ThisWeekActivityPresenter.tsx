import { HStack } from "@chakra-ui/react";
import { Card } from "../../atomsAndMolecules/Card";

export const ThisWeekActivityPresenter = ({
  contributionToday,
  contributionThisWeek,
}: {
  contributionToday: string;
  contributionThisWeek: string;
}) => {
  return (
    <>
      <HStack>
        <Card label="今日" content={contributionToday} />
        <Card label="今週" content={contributionThisWeek} />
      </HStack>
    </>
  );
};
