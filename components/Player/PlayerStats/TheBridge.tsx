import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface TBAdditionalProps {
  bgColor: string;
}

export const TheBridge: FC<Pick<IUserStatsGroup, "BRIDGE"> & TBAdditionalProps> = ({ BRIDGE, bgColor }) => (
  <Table variant="simple" size="sm">
    <Thead>
      <Tr>
        <Th></Th>
        <Th isNumeric>Всё время</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Очков</Td>
        <Td isNumeric>{BRIDGE.global.points}</Td>
      </Tr>
      <Tr>
        <Td>Игр сыграно</Td>
        <Td isNumeric>{BRIDGE.global.games}</Td>
      </Tr>
      <Tr>
        <Td>Побед</Td>
        <Td isNumeric>{BRIDGE.global.wins}</Td>
      </Tr>

      <Tr bg={bgColor}>
        <Td>Процент побед</Td>
        <Td isNumeric>{countWinRate(BRIDGE.global.games, BRIDGE.global.wins).toFixed(2)}%</Td>
      </Tr>
      <Tr>
        <Td>Убийств</Td>
        <Td isNumeric>{BRIDGE.global.kills}</Td>
      </Tr>
      <Tr>
        <Td>Смертей</Td>
        <Td isNumeric>{BRIDGE.global.deaths}</Td>
      </Tr>
      <Tr bgColor={bgColor}>
        <Td>У/С</Td>
        <Td isNumeric>{countKillDeathRate(BRIDGE.global.kills, BRIDGE.global.deaths).toFixed(2)}</Td>
      </Tr>
    </Tbody>
  </Table>
);
