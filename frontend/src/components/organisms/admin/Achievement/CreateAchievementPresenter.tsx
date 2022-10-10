import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { createAchievement } from "../../../../infrastructure/express/api";

type Inputs = {
  name: string;
  description: string;
  difficultyLevel: number;
};

export const CreateAchievementPresenter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (v) => createAchievement(v);

  return (
    <Container maxWidth={"container.xl"} h="calc(100vh)">
      <Box backgroundColor={"white"} padding={"2em"} mt={"3em"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <H1>実績新規作成</H1>
            <HStack>
              <FormControl>
                <FormLabel>実績名</FormLabel>
                <Input
                  type="text"
                  {...(register("name"), { required: true })}
                  variant={"outline"}
                  outlineColor={"#A0AEC0"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>実績説明</FormLabel>
                <Input
                  type="text"
                  {...(register("description"), { required: true })}
                  variant={"outline"}
                  outlineColor={"#A0AEC0"}
                />
              </FormControl>
              <FormControl>
                <FormLabel>実績解除難易度</FormLabel>
                <Input
                  type="text"
                  {...(register("difficultyLevel"), { required: true })}
                  variant={"outline"}
                  outlineColor={"#A0AEC0"}
                />
              </FormControl>

              {errors.name && errors.description && errors.difficultyLevel && (
                <span>入力されていない項目があります</span>
              )}
            </HStack>
            <Button type="submit">作成</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};
