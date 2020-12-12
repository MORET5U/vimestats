import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface MAdditionalProps {
  bgColor: string;
}

export const Murder: FC<Pick<IUserStatsGroup, "MURDER"> & MAdditionalProps> = ({ MURDER, bgColor }) => {
  return (
    <Fragment>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th></Th>
            <Th isNumeric>Всё время</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Игр сыграно</Td>
            <Td isNumeric>{MURDER.global.games}</Td>
          </Tr>

          <Tr>
            <Td>Побед</Td>
            <Td isNumeric>{MURDER.global.total_wins}</Td>
          </Tr>

          <Tr bg={bgColor}>
            <Td>Процент побед</Td>
            <Td isNumeric>{countWinRate(MURDER.global.games, MURDER.global.total_wins).toFixed(2)}%</Td>
          </Tr>

          <Tr>
            <Td>Побед за невинного</Td>
            <Td isNumeric>{MURDER.global.wins_as_innocent}</Td>
          </Tr>

          <Tr>
            <Td>Побед за детектива</Td>
            <Td isNumeric>{MURDER.global.wins_as_detective}</Td>
          </Tr>

          <Tr>
            <Td>Побед за убийцу</Td>
            <Td isNumeric>{MURDER.global.wins_as_maniac}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};
