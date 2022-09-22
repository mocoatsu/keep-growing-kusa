import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAchievementById } from "../../../../hooks/useAchievementById";
import {
  editAchievementById,
  RequestAchievement,
} from "../../../../infrastructure/express/api";
import { EditAchievementPresenter } from "./EditAchievementPresenter";

export const EditAchievementContainer = () => {
  const router = useRouter();
  const { achievement } = useAchievementById(
    router.query.id as string | undefined
  );

  const { handleSubmit, control } = useForm<RequestAchievement>({
    defaultValues: {
      name: achievement.name,
      description: achievement.description,
      difficultyLevel: achievement.difficultyLevel,
    },
    mode: "onChange",
  });

  const onSubmit = (v: RequestAchievement) =>
    editAchievementById(achievement.id, v);

  return <EditAchievementPresenter achievement={achievement} />;
};
