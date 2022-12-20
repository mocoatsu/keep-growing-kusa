import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { paths } from "../../../../constants/paths";
import { login, RequestAuth } from "../../../infrastructure/express/api";
import { LoginPresenter } from "./LoginPresenter";

export function LoginContainer() {
  const { handleSubmit, register } = useForm<RequestAuth>({
    mode: "onChange",
  });

  const router = useRouter();
  const onSubmit = (v: RequestAuth) => {
    login({ name: v.name, password: v.password }).then((_v) => {
      router.push(paths.activity);
    });
  };

  return (
    <LoginPresenter
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
    ></LoginPresenter>
  );
}
