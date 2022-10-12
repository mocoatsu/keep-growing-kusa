import { HStack } from "@chakra-ui/react";
import { CardWithBadge } from "../../atomsAndMolecules/Card";

export const ThisWeekActivityPresenter = ({
  contributionToday,
  contributionThisWeek,
  // contributionThisMonth,
  increasedCountFromYesterday,
  increasedCountFromLastWeek,
}: {
  contributionToday: string;
  contributionThisWeek: string;
  // contributionThisMonth: string;
  increasedCountFromYesterday: string;
  increasedCountFromLastWeek: string;
}) => {
  return (
    <>
      <HStack>
        <CardWithBadge
          label="今日"
          content={contributionToday}
          badgeContent={
            increasedCountFromYesterday
              ? `昨日比${increasedCountFromYesterday} ↑`
              : ""
          }
        />
        <CardWithBadge
          label="今週"
          content={contributionThisWeek}
          badgeContent={
            increasedCountFromLastWeek
              ? `先週比${increasedCountFromLastWeek} ↑`
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
