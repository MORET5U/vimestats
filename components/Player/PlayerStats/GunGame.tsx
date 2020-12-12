import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface GGAdditionalProps {
  bgColor: string;
}

export const GunGame: FC<Pick<IUserStatsGroup, "GG"> & GGAdditionalProps> = ({ GG, bgColor }) => (
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
        <Td>Собрано уровней</Td>
        <Td isNumeric>{GG.global.levels}</Td>
        <Td isNumeric>{GG.season.monthly.levels}</Td>
      </Tr>

      <Tr>
        <Td>Игр сыграно</Td>
        <Td isNumeric>{GG.global.games}</Td>
        <Td isNumeric>{GG.season.monthly.games}</Td>
      </Tr>

      <Tr>
        <Td>Побед</Td>
        <Td isNumeric>{GG.global.wins}</Td>
        <Td isNumeric>{GG.season.monthly.wins}</Td>
      </Tr>

      <Tr bgColor={bgColor}>
        <Td>Процент побед</Td>
        <Td isNumeric>{countWinRate(GG.global.games, GG.global.wins).toFixed(2)}%</Td>
        <Td isNumeric>{countWinRate(GG.season.monthly.games, GG.season.monthly.wins).toFixed(2)}%</Td>
      </Tr>

      <Tr>
        <Td>Убийств</Td>
        <Td isNumeric>{GG.global.kills}</Td>
        <Td isNumeric>{GG.season.monthly.kills}</Td>
      </Tr>
    </Tbody>
  </Table>
);
