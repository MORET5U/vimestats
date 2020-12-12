import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { IUserStatsGroup } from "vime-types/models/Stats";

export const Annihilation: FC<Pick<IUserStatsGroup, "ANN">> = ({ ANN }) => {
  return (
    <Fragment>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th></Th>
            <Th isNumeric>Всё время</Th>
            <Th isNumeric>Сезон</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Убийств</Td>
            <Td isNumeric>{ANN.global.kills}</Td>
            <Td isNumeric>{ANN.season.monthly.kills}</Td>
          </Tr>
          <Tr>
            <Td>Убийств (лук)</Td>
            <Td isNumeric>{ANN.global.bowkills}</Td>
            <Td isNumeric>{ANN.season.monthly.bowkills}</Td>
          </Tr>
          <Tr>
            <Td>Ударов по базам</Td>
            <Td isNumeric>{ANN.global.nexus}</Td>
            <Td isNumeric>{ANN.season.monthly.nexus}</Td>
          </Tr>
          <Tr>
            <Td>Добыто дерева</Td>
            <Td isNumeric>{ANN.global.wood}</Td>
            <Td isNumeric>{ANN.season.monthly.wood}</Td>
          </Tr>
          <Tr>
            <Td>Добыто земли</Td>
            <Td isNumeric>{ANN.global.digged}</Td>
            <Td isNumeric>{ANN.season.monthly.digged}</Td>
          </Tr>
          <Tr>
            <Td>Добыто руд</Td>
            <Td isNumeric>{ANN.global.ores}</Td>
            <Td isNumeric>{ANN.season.monthly.ores}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};
