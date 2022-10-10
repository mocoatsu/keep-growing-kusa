import { useForm } from "react-hook-form";
import { login, RequestAuth } from "../../../infrastructure/express/api";
import { LoginPresenter } from "./LoginPresenter";

export function LoginContainer() {
  const { handleSubmit, register } = useForm<RequestAuth>({
    mode: "onChange",
  });

  const onSubmit = (v: RequestAuth) => {
    login({ name: v.name, password: v.password });
  };

  return (
    <LoginPresenter
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    ></LoginPresenter>
  );
}
