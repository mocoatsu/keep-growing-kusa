import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useEngineerById } from "../../../../hooks/useEngineerById";
import {
  editAchievementById,
  RequestEngineer,
} from "../../../../infrastructure/express/api";
import { EditEngineerPresenter } from "./EditEngineerPresenter";

export const EditEngineerContainer = () => {
  const router = useRouter();
  const { engineer } = useEngineerById(
    router.query.id as string | undefined
  );

  const { handleSubmit, register, reset } = useForm<RequestEngineer>({
    defaultValues: {
      name: engineer.name,
    },
    mode: "onChange",
  });

  useEffect(() => {
    reset(engineer);
  }, [engineer.id]);

  const onSubmit = (v: RequestEngineer) =>
  engineer.id ? editAchievementById(engineer.id, v) : "";
  return (
    <EditEngineerPresenter
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    />
  );
};
