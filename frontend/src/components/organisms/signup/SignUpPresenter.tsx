import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import { RequestAuth } from "../../../infrastructure/express/api";
import { Button } from "../../atomsAndMolecules/Button";
import { H1 } from "../../atomsAndMolecules/Heading";

export const SignUpPresenter = ({
  ...formProps
}: {
  handleSubmit: UseFormHandleSubmit<RequestAuth>;
  onSubmit: (v: RequestAuth) => any;
  register: UseFormRegister<RequestAuth>;
}) => {
  return (
    <Container>
      <Box backgroundColor={"white"} padding={"2em"} mt={"3em"}>
        <H1>サインアップ</H1>
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
              <FormLabel mt={"3"}>パスワード</FormLabel>
              <Input
                type="password"
                {...formProps.register("password", { required: true })}
                variant={"outline"}
                outlineColor={"#A0AEC0"}
                mb={"5"}
              />
            </FormControl>
            <Button type="submit">アカウントを作成</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};
