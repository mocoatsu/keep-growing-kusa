import { Card } from "../../atomsAndMolecules/Card";

export function EnginnerTitlePresenter({ title }: { title: string }) {
  return <Card label="称号" content={title}></Card>;
}
