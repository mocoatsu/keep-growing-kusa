import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl, FormLabel, Input, HStack } from "@chakra-ui/react";

import { Button } from "../../../atomsAndMolecules/Button";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <FormControl>
          <FormLabel>実績名</FormLabel>
          <Input type="text" {...register("name")} required />
        </FormControl>
        <FormControl>
          <FormLabel>実績説明</FormLabel>
          <Input type="text" {...register("description")} required />
        </FormControl>
        <FormControl>
          <FormLabel>実績解除難易度</FormLabel>
          <Input type="text" {...register("difficultyLevel")} required />
        </FormControl>

        {errors.name && errors.description && errors.difficultyLevel && (
          <span>入力されていない項目があります</span>
        )}
        <Button type="submit">登録</Button>
      </HStack>
    </form>
  );
};
