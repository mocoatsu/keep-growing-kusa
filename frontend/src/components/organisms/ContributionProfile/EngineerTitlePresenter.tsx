import { useContribution } from "../../../hooks/useContribuitons";
import { Card } from "../../atomsAndMolecules/Card";
import { ContributionProfilePresenter } from "./ContributionProfilePresenter";

type Props = {
  title: string;
  content: string;
};

export const EngineerTitlePresenter = ({ title, content }: Props) => {
  return <Card title={title} content={content}></Card>;
};
