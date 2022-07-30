import { useContribution } from "../../../hooks/useContribuitons";
import { ThisWeekActivityPresenter } from "./ThisWeekActivityPresenter";

export const ThisWeekActivityContainer = () => {
  const { contributionToday, contributionThisWeek } = useContribution();
  return (
    <ThisWeekActivityPresenter
      contributionToday={String(contributionToday.count())}
      contributionThisWeek={String(contributionThisWeek.count())}
    ></ThisWeekActivityPresenter>
  );
};
