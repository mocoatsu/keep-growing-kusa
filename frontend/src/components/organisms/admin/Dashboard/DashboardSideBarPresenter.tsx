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
      <UnorderedList>
        <ListItem>
          <NavLink href={paths.admin.achievement.list} name={"実績"}></NavLink>
        </ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
    </Box>
  );
};
