import { Button } from "../../atomsAndMolecules/Button";

interface props {
  contribution: any;
}

export const ContributionProfilePresenter = (props: props) => {
  return (
    <>
      <p>{props.contribution}</p>
      <Button size={"sm"}>bottan</Button>
    </>
  );
};
