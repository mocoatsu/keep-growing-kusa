import { useForm } from "react-hook-form";
import {
  createAchievement,
  RequestAchievement,
} from "../../../../infrastructure/express/api";
import { CreateAchievementPresenter } from "./CreateAchievementPresenter";

export const CreateAchievementContainer = () => {
  const { handleSubmit, register } = useForm<RequestAchievement>({
    mode: "onChange",
  });

  const onSubmit = (v: RequestAchievement) => {
    createAchievement({
      name: v.name,
      description: v.description,
      difficultyLevel: v.difficultyLevel,
    });
  };

  return (
    <CreateAchievementPresenter
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    />
  );
};
