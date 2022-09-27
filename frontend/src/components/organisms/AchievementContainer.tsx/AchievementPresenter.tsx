import { Achievement } from "../../../hooks/useAchievements";
import { Card } from "../../atomsAndMolecules/Card";

export const AchievementPresenter = ({
  achievements,
}: {
  achievements: Achievement[];
}) => {
  return (
    <>
      {achievements.map((achievement) => (
        <Card
          key=""
          label={achievement.name}
          content={achievement.description}
        ></Card>
      ))}
    </>
  );
};
