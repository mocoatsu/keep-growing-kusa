import { useContribution } from "../../../hooks/useContribuitons";
import { ThisWeekActivityPresenter } from "./ThisWeekActivityPresenter";

export const ThisWeekActivityContainer = () => {
  const { contributions } = useContribution();

  return (
    <ThisWeekActivityPresenter
      contributionToday={contributions.countToday.toString()}
      contributionThisWeek={contributions.countThisWeek.toString()}
      increasedCountFromYesterday={contributions.increasedCountFromYesterday.toString()}
      increasedCountFromLastWeek={contributions.increasedCountFromLastWeek.toString()}
    ></ThisWeekActivityPresenter>
  );
};
