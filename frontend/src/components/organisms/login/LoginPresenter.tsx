import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { paths } from "../../../../constants/paths";

import { RequestAuth } from "../../../infrastructure/express/api";
import { Button } from "../../atomsAndMolecules/Button";
import { H1 } from "../../atomsAndMolecules/Heading";
import { NavLink } from "../../atomsAndMolecules/Link";

export const LoginPresenter = ({
  ...formProps
}: {
  handleSubmit: UseFormHandleSubmit<RequestAuth>;
  onSubmit: (v: RequestAuth) => any;
  register: UseFormRegister<RequestAuth>;
}) => {
  return (
    <Container>
      <Box backgroundColor={"white"} padding={"2em"} mt={"3em"}>
        <H1>ログイン</H1>
        <form onSubmit={formProps.handleSubmit(formProps.onSubmit)}>
          <VStack>
            <FormControl>
              <FormLabel mt={"4"}>ユーザ名</FormLabel>
              <Input
                type="text"
                {...formProps.register("name", { required: true })}
                variant={"outline"}
                outlineColor={"#A0AEC0"}
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={"2"}>パスワード</FormLabel>
              <Input
                type="password"
                {...formProps.register("password", { required: true })}
                variant={"outline"}
                outlineColor={"#A0AEC0"}
                mb={"3"}
              />
            </FormControl>
            <Button type="submit">ログイン</Button>
            <Spacer pb={3} />
            <NavLink
              href={paths.signup}
              name={"アカウントがない場合はアカウント作成画面へ"}
            ></NavLink>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};
