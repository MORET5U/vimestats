import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface LWAdditionalProps {
  bgColor: string;
}

export const LuckyWars: FC<Pick<IUserStatsGroup, "LUCKYWARS"> & LWAdditionalProps> = ({ LUCKYWARS, bgColor }) => {
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
            <Td isNumeric>{LUCKYWARS.global.games}</Td>
          </Tr>

          <Tr>
            <Td>Побед</Td>
            <Td isNumeric>{LUCKYWARS.global.wins}</Td>
          </Tr>

          <Tr bg={bgColor}>
            <Td>Процент побед</Td>
            <Td isNumeric>{countWinRate(LUCKYWARS.global.games, LUCKYWARS.global.wins).toFixed(2)}%</Td>
          </Tr>

          <Tr>
            <Td>Убийств</Td>
            <Td isNumeric>{LUCKYWARS.global.kills}</Td>
          </Tr>

          <Tr>
            <Td>Смертей</Td>
            <Td isNumeric>{LUCKYWARS.global.deaths}</Td>
          </Tr>

          <Tr bg={bgColor}>
            <Td>У/С</Td>
            <Td isNumeric>{countKillDeathRate(LUCKYWARS.global.kills, LUCKYWARS.global.deaths).toFixed(2)}</Td>
          </Tr>

          <Tr>
            <Td>Лаки Блоков сломано</Td>
            <Td isNumeric>{LUCKYWARS.global.lucky_blocks}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};
