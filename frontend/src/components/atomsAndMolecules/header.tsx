import React from "react";
import { Box, Stack, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HeaderLink } from "./Link";
import { paths } from "../../../constants/paths";

const Header = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={2}
      bg="white"
      color="A0AEC0"
      shadow={"xs"}
      {...props}
    >
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        ml={4}
        spacing={10}
      >
        <HeaderLink href={paths.mypage}>マイページ</HeaderLink>
        <HeaderLink href={paths.activity}>活動記録</HeaderLink>
        <HeaderLink href={paths.achievement}>実績</HeaderLink>
        <HeaderLink href={paths.admin.achievement.list}>管理</HeaderLink>

        <Text>エンジニア</Text>
        <Text>フレンド</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <HeaderLink href={paths.login}>ログイン</HeaderLink>
      </Box>
    </Flex>
  );
};

export default Header;
