import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface CPAdditionalProps {
  bgColor: string;
}

export const ClashPoint: FC<Pick<IUserStatsGroup, "CP"> & CPAdditionalProps> = ({ CP, bgColor }) => {
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
            <Td isNumeric>{CP.global.games}</Td>
            <Td isNumeric>{CP.season.monthly.games}</Td>
          </Tr>

          <Tr>
            <Td>Побед</Td>
            <Td isNumeric>{CP.global.wins}</Td>
            <Td isNumeric>{CP.season.monthly.wins}</Td>
          </Tr>

          <Tr bgColor={bgColor}>
            <Td>Процент побед</Td>
            <Td isNumeric>{countWinRate(CP.global.games, CP.global.wins).toFixed(2)}%</Td>
            <Td isNumeric>{countWinRate(CP.season.monthly.games, CP.season.monthly.wins).toFixed(2)}%</Td>
          </Tr>

          <Tr>
            <Td>Убийств</Td>
            <Td isNumeric>{CP.global.kills}</Td>
            <Td isNumeric>{CP.season.monthly.kills}</Td>
          </Tr>

          <Tr>
            <Td>Смертей</Td>
            <Td isNumeric>{CP.global.deaths}</Td>
            <Td isNumeric>{CP.season.monthly.deaths}</Td>
          </Tr>

          <Tr bgColor={bgColor}>
            <Td>У/С</Td>
            <Td isNumeric>{countKillDeathRate(CP.global.kills, CP.global.deaths).toFixed(2)}</Td>
            <Td isNumeric>{countKillDeathRate(CP.season.monthly.kills, CP.season.monthly.deaths).toFixed(2)}</Td>
          </Tr>

          <Tr>
            <Td>Точек ресурсов сломано</Td>
            <Td isNumeric>{CP.global.resourcePointsBreaked}</Td>
            <Td isNumeric>{CP.season.monthly.resourcePointsBreaked}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};
