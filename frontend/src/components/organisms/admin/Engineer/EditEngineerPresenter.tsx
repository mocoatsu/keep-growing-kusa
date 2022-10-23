import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
  VStack,
} from "@chakra-ui/react";

import { Button } from "../../../atomsAndMolecules/Button";

import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { RequestEngineer } from "../../../../infrastructure/express/api";
import { H1 } from "../../../atomsAndMolecules/Heading";

export const EditEngineerPresenter = ({
  ...formProps
}: {
  handleSubmit: UseFormHandleSubmit<RequestEngineer>;
  onSubmit: (v: RequestEngineer) => any;
  register: UseFormRegister<RequestEngineer>;
}) => {
  return (
    <Container maxWidth={"container.xl"} h="calc(100vh)">
      <Box backgroundColor={"white"} padding={"2em"} mt={"3em"}>
        <H1>プロフィール編集</H1>
        <form onSubmit={formProps.handleSubmit(formProps.onSubmit)}>
          <VStack>
            <FormControl>
              <FormLabel mt={"4"}>名前</FormLabel>
              <Input
                type="text"
                {...formProps.register("name", { required: true })}
                variant={"outline"}
                outlineColor={"#A0AEC0"}
              />
            </FormControl>
            <Button type="submit">反映する</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};
