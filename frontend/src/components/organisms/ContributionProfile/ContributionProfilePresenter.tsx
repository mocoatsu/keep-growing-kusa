interface props {
  contribution: any;
}

export const ContributionProfilePresenter = (props: props) => {
  return <p>{props.contribution}</p>;
};
