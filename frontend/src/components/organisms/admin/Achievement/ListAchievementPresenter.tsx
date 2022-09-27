import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { paths } from "../../../../../constants/paths";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { deleteAchievement } from "../../../../infrastructure/express/api";
import { Achievement } from "../../../../hooks/useAchievements";

export const ListAchievementPresenter = ({
  achievements,
}: {
  achievements: Achievement[];
}) => {
  return (
    <>
      <Link href={paths.admin.achievement.create}>新規作成</Link>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <TableCaption>実績</TableCaption>
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
                  <IconButton
                    aria-label="編集"
                    icon={<EditIcon />}
                    onClick={() => {}}
                  />
                  <Link href={`${achievement.id}`}>編集</Link>
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
    </>
  );
};
