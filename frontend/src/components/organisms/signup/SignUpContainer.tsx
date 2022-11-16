import { useForm } from "react-hook-form";
import { RequestAuth, signup } from "../../../infrastructure/express/api";
import { SignUpPresenter } from "./SignUpPresenter";

export const SignUpContainer = () => {
  const { handleSubmit, register } = useForm<RequestAuth>({
    mode: "onChange",
  });

  const onSubmit = (v: RequestAuth) => {
    signup({ name: v.name, password: v.password });
  };

  return (
    <SignUpPresenter
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    ></SignUpPresenter>
  );
};
