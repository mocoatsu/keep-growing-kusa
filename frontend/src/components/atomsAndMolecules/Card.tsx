import { Badge, Box, Flex } from "@chakra-ui/react";
import { GrayText, LargeText } from "./Text";

export const Card = ({
  label,
  content,
}: {
  label: string;
  content: string;
}) => {
  return (
    <Box shadow={"md"} maxWidth="500px" minWidth="300px" height="150px">
      <Box pt={2} pl={3}>
        <GrayText text={label} />
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} height={"80px"}>
        <LargeText text={content}></LargeText>
      </Flex>
    </Box>
  );
};

export const CardWithBadge = ({
  label,
  content,
  badgeContent,
}: {
  label: string;
  content: string;
  badgeContent: string;
}) => {
  return (
    <Box shadow={"md"} maxWidth="500px" minWidth="300px" height="150px">
      <Box pt={2} pl={3}>
        <GrayText text={label} />
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"} height={"80px"}>
        <LargeText text={content}></LargeText>
      </Flex>
      <Flex justifyContent={"center"}>
        <Badge color={"green"}>{badgeContent}</Badge>
      </Flex>
    </Box>
  );
};
