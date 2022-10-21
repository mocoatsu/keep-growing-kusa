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
import { deleteEngineer } from "../../../../infrastructure/express/api";
import { H1 } from "../../../atomsAndMolecules/Heading";
import { Button } from "../../../atomsAndMolecules/Button";
import { useRouter } from "next/router";
import { Engineer } from "../../../../hooks/useEngineers";

export const ListEngineerPresenter = ({
  engineers,
}: {
  engineers: Engineer[];
}) => {
  const router = useRouter();

  return (
    <Container maxWidth={"container.xl"} h="calc(100vh)">
      <Box backgroundColor={"white"} padding={"1.5em"} mt={"2em"}>
        <H1>エンジニア一覧</H1>
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Spacer />
          <Button
            onClick={() => {
              router.push(`${paths.admin.engineer.create}`);
            }}
            leftIcon={<AddIcon />}
            variant="solid"
            mt={"5"}
          >
            エンジニアを新規作成
          </Button>
        </Flex>
        <TableContainer backgroundColor={"#F7FAFC"}>
          <Table variant="simple" colorScheme="teal" mt={"3"}>
            <Thead>
              <Tr>
                <Th>エンジニアID</Th>
                <Th>エンジニア名</Th>
              </Tr>
            </Thead>
            <Tbody>
              {engineers.map((engineer) => (
                <Tr key={engineer.id}>
                  <Td>{engineer.id}</Td>
                  <Td>{engineer.name}</Td>
                  <Td>
                    <Button
                      onClick={() => {
                        router.push(`${engineer.id}`);
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
                      onClick={() => deleteEngineer(engineer.id)}
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
