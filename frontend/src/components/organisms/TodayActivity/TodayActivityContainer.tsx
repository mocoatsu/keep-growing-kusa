import { useContribution } from "../../../hooks/useContribuitons";
import { TodayActivityPresenter } from "./TodayActivityPresenter";

export const TodayActivityContainer = () => {
  const { contributionWeeks } = useContribution();
  return (
    <TodayActivityPresenter
      contributionCount={contributionWeeks.contributionToday().count()}
    ></TodayActivityPresenter>
  );
};
