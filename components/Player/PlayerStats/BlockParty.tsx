import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface BPAdditionalsProps {
  bgColor: string;
}

export const BlockParty: FC<Pick<IUserStatsGroup, "BP"> & BPAdditionalsProps> = ({ BP, bgColor }) => {
  return (
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
          <Td>Игр сыграно</Td>
          <Td isNumeric>{BP.global.games}</Td>
          <Td isNumeric>{BP.season.monthly.games}</Td>
        </Tr>

        <Tr>
          <Td>Выиграно уровней</Td>
          <Td isNumeric>{BP.global.levels}</Td>
          <Td isNumeric>{BP.season.monthly.levels}</Td>
        </Tr>

        <Tr>
          <Td>Побед</Td>
          <Td isNumeric>{BP.global.wins}</Td>
          <Td isNumeric>{BP.season.monthly.wins}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>Процент побед</Td>
          <Td isNumeric>{countWinRate(BP.global.games, BP.global.wins).toFixed(2)}%</Td>
          <Td isNumeric>{countWinRate(BP.season.monthly.games, BP.season.monthly.wins).toFixed(2)}%</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
