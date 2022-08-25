import { ComparedToLastWeek } from "../../../domain/Contribution/ComparedToLastWeek";
import { ComparedToYesterday } from "../../../domain/Contribution/ComparedToYesterday";
import { useContribution } from "../../../hooks/useContribuitons";
import { ThisWeekActivityPresenter } from "./ThisWeekActivityPresenter";

export const ThisWeekActivityContainer = () => {
  const { contributionWeeks } = useContribution();

  const contributionToday = contributionWeeks.contributionToday().count();
  const contributionThisWeek = contributionWeeks.contributionThisWeek().count();
  // const contributionThisMonth = contributionWeeks.contributionThisWeek().count();
  const increseComparedToYesterday = new ComparedToYesterday(
    contributionWeeks.contributionToday(),
    contributionWeeks.contributionYesterday()
  ).increase();
  const increseComparedToLastWeek = new ComparedToLastWeek(
    contributionWeeks.contributionThisWeek(),
    contributionWeeks.contributionLastWeek()
  ).increase();
  return (
    <ThisWeekActivityPresenter
      contributionToday={String(contributionToday)}
      contributionThisWeek={String(contributionThisWeek)}
      // contributionThisMonth={}
      increseComparedToYesterday={String(increseComparedToYesterday)}
      increseComparedToLastWeek={String(increseComparedToLastWeek)}
    ></ThisWeekActivityPresenter>
  );
};
