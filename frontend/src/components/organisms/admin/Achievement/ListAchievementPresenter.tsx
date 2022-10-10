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
import { paths } from "../../../../../constants/paths";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteAchievement } from "../../../../infrastructure/express/api";
import { Achievement } from "../../../../hooks/useAchievements";
import { H1 } from "../../../atomsAndMolecules/Heading";
import { Button } from "../../../atomsAndMolecules/Button";
import { useRouter } from "next/router";

export const ListAchievementPresenter = ({
  achievements,
}: {
  achievements: Achievement[];
}) => {
  const router = useRouter();

  return (
    <Container maxWidth={"container.xl"}>
      <Box backgroundColor={"white"} padding={"1.5em"} mt={"2em"}>
        <H1>実績一覧</H1>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Spacer />
          <Button
            onClick={() => {
              router.push(`${paths.admin.achievement.create}`);
            }}
            leftIcon={<AddIcon />}
            variant="solid"
            mt={"5"}
          >
            実績を新規作成
          </Button>
        </Flex>
        <TableContainer backgroundColor={"#F7FAFC"}>
          <Table variant="simple" colorScheme="teal" mt={"3"}>
            <Thead>
              <Tr>
                <Th>実績id</Th>
                <Th>実績名</Th>
                <Th>実績解除条件</Th>
                <Th isNumeric>解除難易度</Th>
                <Th>編集</Th>
                <Th>削除</Th>
              </Tr>
            </Thead>
            <Tbody>
              {achievements.map((achievement) => (
                <Tr key={achievement.id}>
                  <Td>{achievement.id}</Td>
                  <Td>{achievement.name}</Td>
                  <Td>{achievement.description}</Td>
                  <Td isNumeric>{achievement.difficultyLevel}</Td>
                  <Td>
                    <Button
                      onClick={() => {
                        router.push(`${achievement.id}`);
                      }}
                      leftIcon={<EditIcon />}
                      variant="solid"
                    >
                      編集
                    </Button>
                  </Td>
                  <Td>
                    <IconButton
                      aria-label="削除"
                      icon={<DeleteIcon />}
                      onClick={() => deleteAchievement(achievement.id)}
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
