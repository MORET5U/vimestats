import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { IUserStatsGroup } from "vime-types/models/Stats";
import { Annihilation } from "./PlayerStats/Annihilation";
import { BedWars } from "./PlayerStats/BedWars";
import { BlockParty } from "./PlayerStats/BlockParty";
import { BuildBattle } from "./PlayerStats/BuildBattles";
import { ClashPoint } from "./PlayerStats/ClashPoint";
import { DeathRun } from "./PlayerStats/DeathRun";
import { Duels } from "./PlayerStats/Duels";
import { GunGame } from "./PlayerStats/GunGame";
import { HungerGames } from "./PlayerStats/HungerGames";
import { JumpLeague } from "./PlayerStats/JumpLeague";
import { KitPVP } from "./PlayerStats/KitPVP";
import { LuckyWars } from "./PlayerStats/LuckyWars";

interface StatGroupProps {
  title: string;
}

const StatGroup: FC<StatGroupProps> = ({ title, children }) => (
  <AccordionItem>
    <AccordionButton>
      <Box flex="1" textAlign="left" fontWeight="bold">
        {title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </AccordionItem>
);

const PlayerStats: FC<IUserStatsGroup> = ({ ANN, BW, BP, BB, CP, DR, DUELS, GG, HG, JUMPLEAGUE, KPVP, LUCKYWARS }) => {
  const rowBgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Fragment>
      <Box w="100%" mb="8px">
        <VStack align="stretch" spacing={2}>
          <Accordion allowToggle allowMultiple>
            <StatGroup title="Annihilation">
              <Annihilation ANN={ANN} />
            </StatGroup>

            <StatGroup title="Bed Wars">
              <BedWars BW={BW} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Block Party">
              <BlockParty BP={BP} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Build Battle">
              <BuildBattle BB={BB} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Clash Point">
              <ClashPoint CP={CP} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Death Run">
              <DeathRun DR={DR} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Duels">
              <Duels DUELS={DUELS} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Gun Game">
              <GunGame GG={GG} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Hunger Games">
              <HungerGames HG={HG} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Jump League">
              <JumpLeague JUMPLEAGUE={JUMPLEAGUE} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="KitPVP">
              <KitPVP KPVP={KPVP} bgColor={rowBgColor} />
            </StatGroup>

            <StatGroup title="Lucky Wars">
              <LuckyWars LUCKYWARS={LUCKYWARS} bgColor={rowBgColor} />
            </StatGroup>
          </Accordion>
        </VStack>
      </Box>
    </Fragment>
  );
};

export default PlayerStats;
