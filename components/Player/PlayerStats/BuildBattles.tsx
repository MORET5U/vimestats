import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface BBAdditionalProps {
  bgColor: string;
}

export const BuildBattle: FC<Pick<IUserStatsGroup, "BB"> & BBAdditionalProps> = ({ BB, bgColor }) => {
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
          <Td isNumeric>{BB.global.games}</Td>
          <Td isNumeric>{BB.season.monthly.games}</Td>
        </Tr>

        <Tr>
          <Td>Побед</Td>
          <Td isNumeric>{BB.global.wins}</Td>
          <Td isNumeric>{BB.season.monthly.wins}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>Процент побед</Td>
          <Td isNumeric>{countWinRate(BB.global.games, BB.global.wins).toFixed(2)}%</Td>
          <Td isNumeric>{countWinRate(BB.season.monthly.games, BB.season.monthly.wins).toFixed(2)}%</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
