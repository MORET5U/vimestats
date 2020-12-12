import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface DRAdtionalProps {
  bgColor: string;
}

export const DeathRun: FC<Pick<IUserStatsGroup, "DR"> & DRAdtionalProps> = ({ DR, bgColor }) => {
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
          <Td isNumeric>{DR.global.games}</Td>
          <Td isNumeric>{DR.season.monthly.games}</Td>
        </Tr>

        <Tr>
          <Td>Побед</Td>
          <Td isNumeric>{DR.global.wins}</Td>
          <Td isNumeric>{DR.season.monthly.wins}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>Процент побед</Td>
          <Td isNumeric>{countWinRate(DR.global.games, DR.global.wins).toFixed(2)}%</Td>
          <Td isNumeric>{countWinRate(DR.season.monthly.games, DR.season.monthly.wins).toFixed(2)}%</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
