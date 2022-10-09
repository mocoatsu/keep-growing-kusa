import { FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import React from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { RequestAuth } from "../../../infrastructure/express/api";
import { Button } from "../../atomsAndMolecules/Button";

export const SignUpPresenter = ({
  ...formProps
}: {
  handleSubmit: UseFormHandleSubmit<RequestAuth>;
  onSubmit: (v: RequestAuth) => any;
  register: UseFormRegister<RequestAuth>;
}) => {
  return (
    <form onSubmit={formProps.handleSubmit(formProps.onSubmit)}>
      <HStack>
        <FormControl>
          <FormLabel>ユーザ名</FormLabel>
          <Input
            type="text"
            {...formProps.register("name", { required: true })}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>パスワード</FormLabel>
          <Input
            type="password"
            {...formProps.register("password", { required: true })}
            required
          />
        </FormControl>
        <Button type="submit">送信</Button>
      </HStack>
    </form>
  );
};
