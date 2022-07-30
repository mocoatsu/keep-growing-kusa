import { Box, HStack, VStack } from "@chakra-ui/react";
import { GrayText, LargeText } from "./Text";

export const Card = ({
  label,
  content,
}: {
  label: string;
  content: string;
}) => {
  return (
    <Box shadow={"md"} maxWidth="500px">
      <HStack>
        <GrayText text={label} />
      </HStack>
      <VStack>
        <LargeText text={content}></LargeText>
      </VStack>
    </Box>
  );
};
