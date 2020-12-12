import { Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { countKillDeathRate, countWinRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";
import { AssumedValued } from "./AssumedValue";

interface TTAdditionalProps {
  bgColor: string;
}

export const TNTTag: FC<Pick<IUserStatsGroup, "TNTTAG"> & TTAdditionalProps> = ({ TNTTAG, bgColor }) => {
  const deaths = TNTTAG.global.games - TNTTAG.global.wins;

  return (
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
          <Td isNumeric>{TNTTAG.global.games}</Td>
        </Tr>

        <Tr>
          <Td>Побед</Td>
          <Td isNumeric>{TNTTAG.global.wins}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>Процент побед</Td>
          <Td isNumeric>{countWinRate(TNTTAG.global.games, TNTTAG.global.wins).toFixed(2)}%</Td>
        </Tr>

        <Tr>
          <Td>Убийств</Td>
          <Td isNumeric>{TNTTAG.global.kills}</Td>
        </Tr>

        <Tr>
          <Td>
            <AssumedValued>
              <Icon as={IoWarningOutline} />
            </AssumedValued>{" "}
            Смертей
          </Td>
          <Td isNumeric>{deaths}</Td>
        </Tr>

        <Tr bgColor={bgColor}>
          <Td>
            <AssumedValued>
              <Icon as={IoWarningOutline} />
            </AssumedValued>{" "}
            У/С
          </Td>
          <Td isNumeric>{countKillDeathRate(TNTTAG.global.kills, deaths).toFixed(2)}%</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
