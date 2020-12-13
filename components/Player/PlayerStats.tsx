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
import Paper from "components/Paper";
import { FC } from "react";
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
import { MobWars } from "./PlayerStats/MobWats";
import { Murder } from "./PlayerStats/Murder";
import { SkyWars } from "./PlayerStats/SkyWars";
import { TheBridge } from "./PlayerStats/TheBridge";
import { TNTRun } from "./PlayerStats/TNTRun";
import { TNTTag } from "./PlayerStats/TNTTag";

interface StatGroupProps {
  title: string;
}

const StatGroup: FC<StatGroupProps> = ({ title, children }) => (
  <AccordionItem borderTop={0}>
    <AccordionButton>
      <Box flex="1" textAlign="left" fontWeight="bold">
        {title}
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel px={0}>{children}</AccordionPanel>
  </AccordionItem>
);

interface PlayerStatsProps {
  isShown: boolean;
}

const PlayerStats: FC<IUserStatsGroup & PlayerStatsProps> = ({
  ANN,
  BW,
  BP,
  BB,
  CP,
  DR,
  DUELS,
  GG,
  HG,
  JUMPLEAGUE,
  KPVP,
  LUCKYWARS,
  MW,
  MURDER,
  SW,
  TNTRUN,
  TNTTAG,
  BRIDGE,
  isShown,
}) => {
  const rowBgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Paper mb="32px" display={isShown ? "block" : "none"}>
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

          <StatGroup title="Mob Wars">
            <MobWars MW={MW} bgColor={rowBgColor} />
          </StatGroup>

          <StatGroup title="Murder Mystery">
            <Murder MURDER={MURDER} bgColor={rowBgColor} />
          </StatGroup>

          <StatGroup title="Sky Wars">
            <SkyWars SW={SW} bgColor={rowBgColor} />
          </StatGroup>

          <StatGroup title="TNT Run">
            <TNTRun TNTRUN={TNTRUN} bgColor={rowBgColor} />
          </StatGroup>

          <StatGroup title="TNT Tag">
            <TNTTag TNTTAG={TNTTAG} bgColor={rowBgColor} />
          </StatGroup>

          <StatGroup title="The Bridge">
            <TheBridge BRIDGE={BRIDGE} bgColor={rowBgColor} />
          </StatGroup>
        </Accordion>
      </VStack>
    </Paper>
  );
};
export default PlayerStats;
