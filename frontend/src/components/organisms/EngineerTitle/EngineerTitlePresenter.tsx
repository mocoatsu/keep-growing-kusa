import { Card } from "../../atomsAndMolecules/Card";

export function EngineerTitlePresenter({ title }: { title: string }) {
  return <Card label="称号" content={title}></Card>;
}
