import { Achievements } from "../../../domain/Achievements";
import { Card } from "../../atomsAndMolecules/Card";

export const AchievementPresenter = ({
  achievements,
}: {
  achievements: Achievements;
}) => {
  return (
    <>
      {achievements.value().map((achievement) => (
        <Card
          key=""
          label={achievement.name}
          content={achievement.description}
        ></Card>
      ))}
    </>
  );
};
