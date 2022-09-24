import React from "react";
import { FormControl, FormLabel, Input, HStack } from "@chakra-ui/react";

import { Button } from "../../../atomsAndMolecules/Button";

import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { RequestAchievement } from "../../../../infrastructure/express/api";

export const EditAchievementPresenter = ({
  ...formProps
}: {
  handleSubmit: UseFormHandleSubmit<RequestAchievement>;
  onSubmit: (v: RequestAchievement) => any;
  register: UseFormRegister<RequestAchievement>;
}) => {
  return (
    <form onSubmit={formProps.handleSubmit(formProps.onSubmit)}>
      <HStack>
        <FormControl>
          <FormLabel>実績名</FormLabel>
          <Input
            type="text"
            {...formProps.register("name", { required: true })}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>実績説明</FormLabel>
          <Input
            type="text"
            {...formProps.register("description", { required: true })}
          />
        </FormControl>
        <FormControl>
          <FormLabel>実績解除難易度</FormLabel>
          <Input
            type="text"
            {...formProps.register("difficultyLevel", { required: true })}
          />
        </FormControl>

        <Button type="submit">登録</Button>
      </HStack>
    </form>
  );
};
