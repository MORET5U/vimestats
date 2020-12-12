import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface DuelsAdditionalProps {
  bgColor: string;
}

export const Duels: FC<Pick<IUserStatsGroup, "DUELS"> & DuelsAdditionalProps> = ({ DUELS, bgColor }) => {
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
            <Td isNumeric>{DUELS.global.total_games}</Td>
            <Td isNumeric>{DUELS.season.monthly.total_games}</Td>
          </Tr>

          <Tr>
            <Td>Побед</Td>
            <Td isNumeric>{DUELS.global.total_wins}</Td>
            <Td isNumeric>{DUELS.season.monthly.total_wins}</Td>
          </Tr>

          <Tr bgColor={bgColor}>
            <Td>Процент побед</Td>
            <Td isNumeric>{countWinRate(DUELS.global.total_games, DUELS.global.total_wins).toFixed(2)}%</Td>
            <Td isNumeric>
              {countWinRate(DUELS.season.monthly.total_games, DUELS.season.monthly.total_wins).toFixed(2)}%
            </Td>
          </Tr>

          <Tr bgColor={bgColor}>
            <Td>Серия побед</Td>
            <Td isNumeric>{DUELS.global.maxstrike}</Td>
            <Td isNumeric>—</Td>
          </Tr>

          <Tr>
            <Td>Одиночных игр сыграно</Td>
            <Td isNumeric>{DUELS.global.solo_games}</Td>
            <Td isNumeric>{DUELS.season.monthly.solo_games}</Td>
          </Tr>

          <Tr>
            <Td>Одиночных побед</Td>
            <Td isNumeric>{DUELS.global.solo_wins}</Td>
            <Td isNumeric>{DUELS.season.monthly.solo_wins}</Td>
          </Tr>

          <Tr bgColor={bgColor}>
            <Td>Процент одиночных побед</Td>
            <Td isNumeric>{countWinRate(DUELS.global.solo_games, DUELS.global.solo_wins).toFixed(2)}%</Td>
            <Td isNumeric>
              {countWinRate(DUELS.season.monthly.solo_games, DUELS.season.monthly.solo_wins).toFixed(2)}%
            </Td>
          </Tr>

          <Tr>
            <Td>Рейтинговых игр сыграно</Td>
            <Td isNumeric>{DUELS.global.ranked_games}</Td>
            <Td isNumeric>{DUELS.season.monthly.ranked_games}</Td>
          </Tr>

          <Tr>
            <Td>Рейтинговых побед</Td>
            <Td isNumeric>{DUELS.global.ranked_wins}</Td>
            <Td isNumeric>{DUELS.season.monthly.ranked_wins}</Td>
          </Tr>

          <Tr bgColor={bgColor}>
            <Td>Процент рейтинговых побед</Td>
            <Td isNumeric>{countWinRate(DUELS.global.ranked_games, DUELS.global.ranked_wins).toFixed(2)}%</Td>
            <Td isNumeric>
              {countWinRate(DUELS.season.monthly.ranked_games, DUELS.season.monthly.ranked_wins).toFixed(2)}%
            </Td>
          </Tr>

          <Tr>
            <Td>Potions побед</Td>
            <Td isNumeric>{DUELS.global.wins_potion}</Td>
            <Td isNumeric>{DUELS.season.monthly.wins_potion}</Td>
          </Tr>

          <Tr>
            <Td>Classic побед</Td>
            <Td isNumeric>{DUELS.global.wins_classic}</Td>
            <Td isNumeric>{DUELS.season.monthly.wins_classic}</Td>
          </Tr>

          <Tr>
            <Td>UHC побед</Td>
            <Td isNumeric>{DUELS.global.wins_uhc}</Td>
            <Td isNumeric>{DUELS.season.monthly.wins_uhc}</Td>
          </Tr>

          <Tr>
            <Td>BWH побед</Td>
            <Td isNumeric>{DUELS.global.wins_bwh}</Td>
            <Td isNumeric>{DUELS.season.monthly.wins_bwh}</Td>
          </Tr>

          <Tr>
            <Td>Bow побед</Td>
            <Td isNumeric>{DUELS.global.wins_bow}</Td>
            <Td isNumeric>{DUELS.season.monthly.wins_bow}</Td>
          </Tr>

          <Tr>
            <Td>OP побед</Td>
            <Td isNumeric>{DUELS.global.wins_op}</Td>
            <Td isNumeric>{DUELS.season.monthly.wins_op}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Fragment>
  );
};
