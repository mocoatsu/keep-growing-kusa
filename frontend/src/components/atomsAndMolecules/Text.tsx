import { Text } from "@chakra-ui/react";

export const GrayText = ({ text }: { text: string }) => {
  return <Text color={"gray.500"}>{text}</Text>;
};

export const LargeText = ({ text }: { text: string }) => {
  return <Text size={"lg"}>{text}</Text>;
};
