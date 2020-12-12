import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface MWAdditionalProps {
  bgColor: string;
}

export const MobWars: FC<Pick<IUserStatsGroup, "MW"> & MWAdditionalProps> = ({ MW, bgColor }) => {
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
          <Td isNumeric>{MW.global.games}</Td>
          <Td isNumeric>{MW.season.monthly.games}</Td>
        </Tr>

        <Tr>
          <Td>Побед</Td>
          <Td isNumeric>{MW.global.wins}</Td>
          <Td isNumeric>{MW.season.monthly.wins}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>Процент побед</Td>
          <Td isNumeric>{countWinRate(MW.global.games, MW.global.wins).toFixed(2)}%</Td>
          <Td isNumeric>{countWinRate(MW.season.monthly.games, MW.season.monthly.wins).toFixed(2)}%</Td>
        </Tr>

        <Tr>
          <Td>Убито мобов</Td>
          <Td isNumeric>{MW.global.mobsKilled}</Td>
          <Td isNumeric>{MW.season.monthly.mobsKilled}</Td>
        </Tr>

        <Tr>
          <Td>Отправлено мобов</Td>
          <Td isNumeric>{MW.global.mobsSended}</Td>
          <Td isNumeric>{MW.season.monthly.mobsSended}</Td>
        </Tr>

        <Tr>
          <Td>Максимальный доход</Td>
          <Td isNumeric>{MW.global.maxIncome}</Td>
          <Td isNumeric>—</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
