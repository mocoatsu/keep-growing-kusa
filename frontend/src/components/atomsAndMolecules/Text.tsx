import { Text } from "@chakra-ui/react";

export const GrayText = ({ text }: { text: string }) => {
  return (
    <Text fontSize={"sm"} color={"gray.500"}>
      {text}
    </Text>
  );
};

export const LargeText = ({ text }: { text: string }) => {
  return <Text fontSize={"2xl"}>{text}</Text>;
};
