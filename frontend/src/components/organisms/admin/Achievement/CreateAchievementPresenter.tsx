import React from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  HStack,
  Container,
  Box,
  VStack,
} from "@chakra-ui/react";

import { Button } from "../../../atomsAndMolecules/Button";
import { H1 } from "../../../atomsAndMolecules/Heading";
import { RequestAchievement } from "../../../../infrastructure/express/api";

export const CreateAchievementPresenter = ({
  ...formProps
}: {
  handleSubmit: UseFormHandleSubmit<RequestAchievement>;
  onSubmit: (v: RequestAchievement) => any;
  register: UseFormRegister<RequestAchievement>;
}) => {
  return (
    <Container maxWidth={"container.xl"} h="calc(100vh)">
      <Box backgroundColor={"white"} padding={"2em"} mt={"3em"}>
        <form onSubmit={formProps.handleSubmit(formProps.onSubmit)}>
          <VStack>
            <H1>実績新規作成</H1>
            <HStack>
              <FormControl>
                <FormLabel>実績名</FormLabel>
                <Input
                  type="text"
                  {...formProps.register("name", { required: true })}
                  variant={"outline"}
                  outlineColor={"#A0AEC0"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>実績説明</FormLabel>
                <Input
                  type="text"
                  {...formProps.register("description", { required: true })}
                  variant={"outline"}
                  outlineColor={"#A0AEC0"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>実績解除難易度</FormLabel>
                <Input
                  type="text"
                  {...formProps.register("difficultyLevel", { required: true })}
                  variant={"outline"}
                  outlineColor={"#A0AEC0"}
                />
              </FormControl>
            </HStack>
            <Button type="submit">作成</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};
