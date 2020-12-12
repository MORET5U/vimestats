import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface BWAdditionalProps {
  bgColor: string;
}

export const BedWars: FC<Pick<IUserStatsGroup, "BW"> & BWAdditionalProps> = ({ BW, bgColor }) => {
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
            <Td isNumeric>{BW.global.games}</Td>
            <Td isNumeric>{BW.season.monthly.games}</Td>
          </Tr>

          <Tr>
            <Td>Побед</Td>
            <Td isNumeric>{BW.global.wins}</Td>
            <Td isNumeric>{BW.season.monthly.wins}</Td>
          </Tr>

          <Tr bg={bgColor}>
            <Td>Процент побед</Td>
            <Td isNumeric>{countWinRate(BW.global.games, BW.global.wins).toFixed(2)}%</Td>
            <Td isNumeric>{countWinRate(BW.season.monthly.games, BW.season.monthly.wins).toFixed(2)}%</Td>
          </Tr>

          <Tr>
            <Td>Убийств</Td>
            <Td isNumeric>{BW.global.kills}</Td>
            <Td isNumeric>{BW.season.monthly.kills}</Td>
          </Tr>

          <Tr>
            <Td>Смертей</Td>
            <Td isNumeric>{BW.global.deaths}</Td>
            <Td isNumeric>{BW.season.monthly.deaths}</Td>
          </Tr>

          <Tr bg={bgColor}>
            <Td>У/С</Td>
            <Td isNumeric>{countKillDeathRate(BW.global.kills, BW.global.deaths).toFixed(2)}</Td>
            <Td isNumeric>{countKillDeathRate(BW.season.monthly.kills, BW.season.monthly.deaths).toFixed(2)}</Td>
          </Tr>

          <Tr>
            <Td>Кроватей сломано</Td>
            <Td isNumeric>{BW.global.bedBreaked}</Td>
            <Td isNumeric>{BW.season.monthly.bedBreaked}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};
