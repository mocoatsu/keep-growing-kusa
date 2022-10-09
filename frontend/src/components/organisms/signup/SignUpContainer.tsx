import { useForm } from "react-hook-form";
import { RequestAuth, signup } from "../../../infrastructure/express/api";
import { SignUpPresenter } from "./SignUpPresenter";

export function SignUpContainer() {
  const { handleSubmit, register } = useForm<RequestAuth>();

  const onSubmit = (v: RequestAuth) =>
    signup({ name: v.name, password: v.password });

  return (
    <SignUpPresenter
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    ></SignUpPresenter>
  );
}
