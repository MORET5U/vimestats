import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface SWAdditionalProps {
  bgColor: string;
}

export const SkyWars: FC<Pick<IUserStatsGroup, "SW"> & SWAdditionalProps> = ({ SW, bgColor }) => {
  return (
    <Fragment>
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
            <Td isNumeric>{SW.global.games}</Td>
            <Td isNumeric>{SW.season.monthly.games}</Td>
          </Tr>

          <Tr>
            <Td>Побед</Td>
            <Td isNumeric>{SW.global.wins}</Td>
            <Td isNumeric>{SW.season.monthly.wins}</Td>
          </Tr>

          <Tr>
            <Td>Серия побед</Td>
            <Td isNumeric>{SW.global.currentWinStreak}</Td>
            <Td isNumeric>—</Td>
          </Tr>

          <Tr>
            <Td>Максимальная серия побед</Td>
            <Td isNumeric>{SW.global.winStreak}</Td>
            <Td isNumeric>—</Td>
          </Tr>

          <Tr bg={bgColor}>
            <Td>Процент побед</Td>
            <Td isNumeric>{countWinRate(SW.global.games, SW.global.wins).toFixed(2)}%</Td>
            <Td isNumeric>{countWinRate(SW.season.monthly.games, SW.season.monthly.wins).toFixed(2)}%</Td>
          </Tr>

          <Tr>
            <Td>Убийств</Td>
            <Td isNumeric>{SW.global.kills}</Td>
            <Td isNumeric>{SW.season.monthly.kills}</Td>
          </Tr>

          <Tr>
            <Td>Смертей</Td>
            <Td isNumeric>{SW.global.deaths}</Td>
            <Td isNumeric>{SW.season.monthly.deaths}</Td>
          </Tr>

          <Tr bg={bgColor}>
            <Td>У/С</Td>
            <Td isNumeric>{countKillDeathRate(SW.global.kills, SW.global.deaths).toFixed(2)}</Td>
            <Td isNumeric>{countKillDeathRate(SW.season.monthly.kills, SW.season.monthly.deaths).toFixed(2)}</Td>
          </Tr>

          <Tr>
            <Td>Поставлено блоков</Td>
            <Td isNumeric>{SW.global.blocksPlaced}</Td>
            <Td isNumeric>{SW.season.monthly.blocksPlaced}</Td>
          </Tr>

          <Tr>
            <Td>Поставлено сломано</Td>
            <Td isNumeric>{SW.global.blocksBroken}</Td>
            <Td isNumeric>{SW.season.monthly.blocksBroken}</Td>
          </Tr>

          <Tr>
            <Td>Выстрелов из лука</Td>
            <Td isNumeric>{SW.global.arrowsFired}</Td>
            <Td isNumeric>{SW.season.monthly.arrowsFired}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};
