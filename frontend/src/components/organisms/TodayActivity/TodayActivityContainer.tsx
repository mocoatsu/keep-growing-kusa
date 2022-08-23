import { useContribution } from "../../../hooks/useContribuitons";
import { TodayActivityPresenter } from "./TodayActivityPresenter";

export const TodayActivityContainer = () => {
  const { contributionToday } = useContribution();
  return (
    <TodayActivityPresenter
      contributionCount={contributionToday.count()}
    ></TodayActivityPresenter>
  );
};
