import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface JLAdditionalProps {
  bgColor: string;
}

export const JumpLeague: FC<Pick<IUserStatsGroup, "JUMPLEAGUE"> & JLAdditionalProps> = ({ JUMPLEAGUE, bgColor }) => (
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
        <Td isNumeric>{JUMPLEAGUE.global.games}</Td>
      </Tr>

      <Tr>
        <Td>Побед</Td>
        <Td isNumeric>{JUMPLEAGUE.global.wins}</Td>
      </Tr>

      <Tr bgColor={bgColor}>
        <Td>Процент побед</Td>
        <Td isNumeric>{countWinRate(JUMPLEAGUE.global.games, JUMPLEAGUE.global.wins).toFixed(2)}%</Td>
      </Tr>

      <Tr>
        <Td>Убийств</Td>
        <Td isNumeric>{JUMPLEAGUE.global.kills}</Td>
      </Tr>

      <Tr>
        <Td>Смертей</Td>
        <Td isNumeric>{JUMPLEAGUE.global.deaths}</Td>
      </Tr>

      <Tr bgColor={bgColor}>
        <Td>У/C</Td>
        <Td isNumeric>{countKillDeathRate(JUMPLEAGUE.global.kills, JUMPLEAGUE.global.deaths).toFixed(2)}</Td>
      </Tr>

      <Tr>
        <Td>Чекпоинтов</Td>
        <Td isNumeric>{JUMPLEAGUE.global.checkpoints}</Td>
      </Tr>
    </Tbody>
  </Table>
);
