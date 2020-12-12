import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { countKillDeathRate } from "utils/processing";
import { IUserStatsGroup } from "vime-types/models/Stats";

interface KPAdditionalProps {
  bgColor: string;
}

export const KitPVP: FC<Pick<IUserStatsGroup, "KPVP"> & KPAdditionalProps> = ({ KPVP, bgColor }) => (
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
        <Td>Очков</Td>
        <Td isNumeric>{KPVP.global.points}</Td>
        <Td isNumeric>—</Td>
      </Tr>

      <Tr>
        <Td>Убийств</Td>
        <Td isNumeric>{KPVP.global.kills}</Td>
        <Td isNumeric>{KPVP.season.monthly.kills}</Td>
      </Tr>

      <Tr>
        <Td>Смертей</Td>
        <Td isNumeric>{KPVP.global.deaths}</Td>
        <Td isNumeric>{KPVP.season.monthly.deaths}</Td>
      </Tr>

      <Tr bgColor={bgColor}>
        <Td>У/С</Td>
        <Td isNumeric>{countKillDeathRate(KPVP.global.kills, KPVP.global.deaths).toFixed(2)}</Td>
        <Td isNumeric>{countKillDeathRate(KPVP.season.monthly.kills, KPVP.season.monthly.deaths).toFixed(2)}</Td>
      </Tr>
    </Tbody>
  </Table>
);
