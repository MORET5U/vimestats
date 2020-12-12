import { Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";
import { AssumedValued } from "./AssumedValue";

interface HGAdtionalProps {
  bgColor: string;
}

export const HungerGames: FC<Pick<IUserStatsGroup, "HG"> & HGAdtionalProps> = ({ HG, bgColor }) => {
  const globalDeaths = HG.global.games - HG.global.wins;
  const monthlyDeaths = HG.season.monthly.games - HG.season.monthly.games;

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
          <Td isNumeric>{HG.global.games}</Td>
          <Td isNumeric>{HG.season.monthly.games}</Td>
        </Tr>

        <Tr>
          <Td>Побед</Td>
          <Td isNumeric>{HG.global.wins}</Td>
          <Td isNumeric>{HG.season.monthly.wins}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>Процент побед</Td>
          <Td isNumeric>{countWinRate(HG.global.games, HG.global.wins).toFixed(2)}%</Td>
          <Td isNumeric>{countWinRate(HG.season.monthly.games, HG.season.monthly.wins).toFixed(2)}%</Td>
        </Tr>

        <Tr>
          <Td>Убийств</Td>
          <Td isNumeric>{HG.global.kills}</Td>
          <Td isNumeric>{HG.season.monthly.kills}</Td>
        </Tr>

        <Tr>
          <Td>
            <AssumedValued>
              <Icon as={IoWarningOutline} />
            </AssumedValued>{" "}
            Смертей
          </Td>
          <Td isNumeric>{globalDeaths}</Td>
          <Td isNumeric>{monthlyDeaths}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>
            <AssumedValued>
              <Icon as={IoWarningOutline} />
            </AssumedValued>{" "}
            У/С
          </Td>
          <Td isNumeric>{countKillDeathRate(HG.global.kills, globalDeaths).toFixed(2)}</Td>
          <Td isNumeric>{countKillDeathRate(HG.season.monthly.kills, monthlyDeaths).toFixed(2)}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
