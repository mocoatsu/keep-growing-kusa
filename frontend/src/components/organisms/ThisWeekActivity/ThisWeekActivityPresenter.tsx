import { HStack } from "@chakra-ui/react";
import { CardWithBadge } from "../../atomsAndMolecules/Card";

export const ThisWeekActivityPresenter = ({
  contributionToday,
  contributionThisWeek,
  // contributionThisMonth,
  increseComparedToYesterday,
  increseComparedToLastWeek,
}: {
  contributionToday: string;
  contributionThisWeek: string;
  // contributionThisMonth: string;
  increseComparedToYesterday: string;
  increseComparedToLastWeek: string;
  // increseComparedToLastMonth: string;
}) => {
  return (
    <>
      <HStack>
        <CardWithBadge
          label="今日"
          content={contributionToday}
          badgeContent={
            increseComparedToYesterday
              ? `昨日比${increseComparedToYesterday} ↑`
              : ""
          }
        />
        <CardWithBadge
          label="今週"
          content={contributionThisWeek}
          badgeContent={
            increseComparedToLastWeek
              ? `先週比${increseComparedToLastWeek} ↑`
              : ""
          }
        />
        {/* <CardWithBadge
          label="今月"
          content={contributionThisMonth}
          badgeContent={increseComparedToLastMonth}
        /> */}
      </HStack>
    </>
  );
};
