import { useRouter } from "next/router";
import { useEffect } from "react";
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

  const { handleSubmit, register, reset } = useForm<RequestAchievement>({
    defaultValues: {
      name: achievement.name,
      description: achievement.description,
      difficultyLevel: achievement.difficultyLevel,
    },
    mode: "onChange",
  });

  useEffect(() => {
    reset(achievement);
  }, [achievement.id]);

  const onSubmit = (v: RequestAchievement) =>
    achievement.id ? editAchievementById(achievement.id, v) : "";
  return (
    <EditAchievementPresenter
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    />
  );
};
