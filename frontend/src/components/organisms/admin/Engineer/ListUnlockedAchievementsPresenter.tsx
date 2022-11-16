import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Container,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteUnlockAchievement } from "../../../../infrastructure/express/api";
import { Achievement } from "../../../../hooks/useAchievements";
import { H1 } from "../../../atomsAndMolecules/Heading";

export const ListUnlockedAchievementsPresenter = ({
  engineerId,
  unlockedachievements,
}: {
  engineerId: string;
  unlockedachievements: Achievement[];
}) => {
  return (
    <Container maxWidth={"container.xl"} h="calc(100vh)">
      <Box backgroundColor={"white"} padding={"1.5em"} mt={"2em"}>
        <H1>解除実績一覧</H1>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Spacer />
        </Flex>
        <TableContainer backgroundColor={"#F7FAFC"}>
          <Table variant="simple" colorScheme="teal" mt={"3"}>
            <Thead>
              <Tr>
                <Th>実績id</Th>
                <Th>実績名</Th>
                <Th>削除</Th>
              </Tr>
            </Thead>
            <Tbody>
              {unlockedachievements.map((achievement) => (
                <Tr key={achievement.id}>
                  <Td>{achievement.id}</Td>
                  <Td>{achievement.name}</Td>
                  <Td>
                    <IconButton
                      aria-label="削除"
                      icon={<DeleteIcon />}
                      onClick={() =>
                        deleteUnlockAchievement(engineerId, achievement.id)
                      }
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};
