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
import { RequestAchievement } from "../../../../infrastructure/express/api";
import { H1 } from "../../../atomsAndMolecules/Heading";

export const EditAchievementPresenter = ({
  ...formProps
}: {
  handleSubmit: UseFormHandleSubmit<RequestAchievement>;
  onSubmit: (v: RequestAchievement) => any;
  register: UseFormRegister<RequestAchievement>;
}) => {
  return (
    <Container maxWidth={"container.xl"} h="calc(100vh)">
      <Box backgroundColor={"white"} padding={"2em"} mt={"3em"}>
        <H1>実績編集</H1>
        <form onSubmit={formProps.handleSubmit(formProps.onSubmit)}>
          <VStack>
            <FormControl>
              <FormLabel mt={"4"}>実績名</FormLabel>
              <Input
                type="text"
                {...formProps.register("name", { required: true })}
                variant={"outline"}
                outlineColor={"#A0AEC0"}
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={"3"}>実績説明</FormLabel>
              <Input
                type="text"
                {...formProps.register("description", { required: true })}
                variant={"outline"}
                outlineColor={"#A0AEC0"}
              />
            </FormControl>
            <FormControl>
              <FormLabel mt={"3"}>実績解除難易度</FormLabel>
              <Input
                type="text"
                {...formProps.register("difficultyLevel", { required: true })}
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
