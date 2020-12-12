import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface TRAdditionalProps {
  bgColor: string;
}

export const TNTRun: FC<Pick<IUserStatsGroup, "TNTRUN"> & TRAdditionalProps> = ({ TNTRUN, bgColor }) => (
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
        <Td isNumeric>{TNTRUN.global.games}</Td>
      </Tr>

      <Tr>
        <Td>Побед</Td>
        <Td isNumeric>{TNTRUN.global.wins}</Td>
      </Tr>

      <Tr bgColor={bgColor}>
        <Td>Процент побед</Td>
        <Td isNumeric>{countWinRate(TNTRUN.global.games, TNTRUN.global.wins).toFixed(2)}%</Td>
      </Tr>

      <Tr>
        <Td>Уничтожено блоков</Td>
        <Td isNumeric>{TNTRUN.global.broken_blocks}</Td>
      </Tr>
    </Tbody>
  </Table>
);
