import { FunctionComponent } from "react";
import { IUserStatsGroup } from "vime-types/models/Stats";

import { Grid } from "@material-ui/core";

import Annihilation from "./Panels/Annihilation";
import BedWars from "./Panels/BedWars";
import BlockParty from "./Panels/BlockPaty";
import BuildBattle from "./Panels/BuildBattle";
import ClashPoint from "./Panels/ClashPoint";
import DeathRun from "./Panels/DeathRun";
import Duels from "./Panels/Duels";
import GunGame from "./Panels/GunGame";
import HungerGames from "./Panels/HungerGames";
import JumpLeague from "./Panels/JumpLeague";
import KitPVP from "./Panels/KitPVP";
import LuckyWars from "./Panels/LuckyWars";
import MobWars from "./Panels/MobWars";
import MurderMystery from "./Panels/MurderMystery";
import SkyWars from "./Panels/SkyWars";
import TheBridge from "./Panels/TheBridge";
import TNTRun from "./Panels/TNTRun";
import TNTTag from "./Panels/TNTTag";
import StatsAccordion from "./StatsAccordion";

type StatsProps = {
  stats: IUserStatsGroup;
};

const Stats: FunctionComponent<StatsProps> = ({ stats }) => {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <StatsAccordion title="Annihilation">
          <Annihilation global={stats.ANN.global} />
        </StatsAccordion>

        <StatsAccordion title="Bed Wars">
          <BedWars global={stats.BW.global} />
        </StatsAccordion>

        <StatsAccordion title="Block Party">
          <BlockParty global={stats.BP.global} />
        </StatsAccordion>

        <StatsAccordion title="Build Battle">
          <BuildBattle global={stats.BB.global} />
        </StatsAccordion>

        <StatsAccordion title="Clash Point">
          <ClashPoint global={stats.CP.global} />
        </StatsAccordion>

        <StatsAccordion title="Death Run">
          <DeathRun global={stats.DR.global} />
        </StatsAccordion>

        <StatsAccordion title="Duels">
          <Duels global={stats.DUELS.global} />
        </StatsAccordion>

        <StatsAccordion title="Gun Game">
          <GunGame global={stats.GG.global} />
        </StatsAccordion>

        <StatsAccordion title="Hunger Games">
          <HungerGames global={stats.HG.global} />
        </StatsAccordion>

        <StatsAccordion title="Jump League">
          <JumpLeague global={stats.JUMPLEAGUE.global} />
        </StatsAccordion>

        <StatsAccordion title="KitPVP">
          <KitPVP global={stats.KPVP.global} />
        </StatsAccordion>

        <StatsAccordion title="Lucky Wars">
          <LuckyWars global={stats.LUCKYWARS.global} />
        </StatsAccordion>

        <StatsAccordion title="MobWars">
          <MobWars global={stats.MW.global} />
        </StatsAccordion>

        <StatsAccordion title="Murder Mystery">
          <MurderMystery global={stats.MURDER.global} />
        </StatsAccordion>

        {/** Paintball **/}
        {/** Prison **/}
        {/** Sheep Wars **/}

        <StatsAccordion title="Sky Wars">
          <SkyWars global={stats.SW.global} />
        </StatsAccordion>

        {/** Spleef **/}

        <StatsAccordion title="TNT Run">
          <TNTRun global={stats.TNTRUN.global} />
        </StatsAccordion>

        <StatsAccordion title="TNT Tag">
          <TNTTag global={stats.TNTTAG.global} />
        </StatsAccordion>

        <StatsAccordion title="The Bridge">
          <TheBridge global={stats.BRIDGE.global} />
        </StatsAccordion>
      </Grid>
      {/** Turf Wars **/}
      {/** Аркады **/}
    </Grid>
  );
};

export default Stats;
