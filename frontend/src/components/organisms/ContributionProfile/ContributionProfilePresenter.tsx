import { Suspense } from "react";

interface props {
  contribution: any;
}

export const ContributionProfilePresenter = (props: props) => {
  console.log("presenter", props.contribution);

  return <p>{"presenter"}</p>;
};
