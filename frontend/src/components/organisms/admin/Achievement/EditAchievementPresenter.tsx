import React from "react";
import { Control, useController, UseFormHandleSubmit } from "react-hook-form";
import { FormControl, FormLabel, Input, HStack } from "@chakra-ui/react";

import { Button } from "../../../atomsAndMolecules/Button";
import { RequestAchievement } from "../../../../infrastructure/express/api";
import { Achievement } from "../../../../domain/Achievement";

type Inputs = {
  name: string;
  description: string;
  difficultyLevel: number;
};

export const EditAchievementPresenter = ({
  achievement,
  onSubmit,
  handleSubmit,
  control,
}: {
  achievement: Achievement;
  onSubmit: (achievement: RequestAchievement) => void;
  handleSubmit: UseFormHandleSubmit<RequestAchievement>;
  control: Control<RequestAchievement, any>;
}) => {
  const { field, fieldState } = useController(props);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HStack>
        <FormControl>
          <FormLabel>実績名</FormLabel>
          <Input type="text" {...field} control required />
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
