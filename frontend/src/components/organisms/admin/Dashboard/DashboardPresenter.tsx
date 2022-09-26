import { paths } from "../../../../../constants/paths";
import { CardWithLink } from "../../../atomsAndMolecules/Card";

export const DashboardPresenter = () => {
  return <CardWithLink label="実績" href={paths.admin.achievement.list} />;
};
