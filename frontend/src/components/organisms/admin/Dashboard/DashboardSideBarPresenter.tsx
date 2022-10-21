import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

import { NavLink } from "../../../atomsAndMolecules/Link";

import { paths } from "../../../../../constants/paths";

export const DashboardSideBarPresenter = () => {
  return (
    <Box
      backgroundColor={"blackAlpha.700"}
      color={"white"}
      h="calc(100vh)"
      padding={"1.5em"}
    >
      <UnorderedList spacing={1.5}>
        <ListItem>
          <NavLink
            href={paths.admin.engineer.list}
            name={"エンジニア"}
          ></NavLink>
        </ListItem>
        <ListItem>
          <NavLink href={paths.admin.achievement.list} name={"実績"}></NavLink>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
