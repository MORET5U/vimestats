import { FunctionComponent } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Duels from "./Panels/Duels";
import SkyWars from "./Panels/SkyWars";
import HungerGames from "./Panels/HungerGames";
import BedWars from "./Panels/BedWars";
import Annihilation from "./Panels/Annihilation";
import BuildBattle from "./Panels/BuildBattle";
import KitPVP from "./Panels/KitPVP";
import TheBridge from "./Panels/TheBridge";
import GunGame from "./Panels/GunGame";
import MobWars from "./Panels/MobWars";
import ClashPoint from "./Panels/ClashPoint";
import LuckyWars from "./Panels/LuckyWars";
import { IUserStatsGroup } from "vime-types/models/Stats";
import DeathRun from "./Panels/DeathRun";
import TNTRun from "./Panels/TNTRun";
import JumpLeague from "./Panels/JumpLeague";
import BlockParty from "./Panels/BlockPaty";
import MurderMystery from "./Panels/MurderMystery";
import StatsCard from "./StatsCard";
import TNTTag from "./Panels/TNTTag";

type StatsProps = {
  stats: IUserStatsGroup;
};

const Stats: FunctionComponent<StatsProps> = ({ stats }) => {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <StatsCard title="Annihilation">
          <Annihilation global={stats.ANN.global} />
        </StatsCard>

        <StatsCard title="Bed Wars">
          <BedWars global={stats.BW.global} />
        </StatsCard>

        <StatsCard title="Block Party">
          <BlockParty global={stats.BP.global} />
        </StatsCard>

        <StatsCard title="Build Battle">
          <BuildBattle global={stats.BB.global} />
        </StatsCard>

        <StatsCard title="Clash Point">
          <ClashPoint global={stats.CP.global} />
        </StatsCard>

        <StatsCard title="Death Run">
          <DeathRun global={stats.DR.global} />
        </StatsCard>

        <StatsCard title="Duels">
          <Duels global={stats.DUELS.global} />
        </StatsCard>

        <StatsCard title="Gun Game">
          <GunGame global={stats.GG.global} />
        </StatsCard>

        <StatsCard title="Hunger Games">
          <HungerGames global={stats.HG.global} />
        </StatsCard>

        <StatsCard title="Jump League">
          <JumpLeague global={stats.JUMPLEAGUE.global} />
        </StatsCard>

        <StatsCard title="KitPVP">
          <KitPVP global={stats.KPVP.global} />
        </StatsCard>

        <StatsCard title="Lucky Wars">
          <LuckyWars global={stats.LUCKYWARS.global} />
        </StatsCard>

        <StatsCard title="MobWars">
          <MobWars global={stats.MW.global} />
        </StatsCard>

        <StatsCard title="Murder Mystery">
          <MurderMystery global={stats.MURDER.global} />
        </StatsCard>

        {/** Paintball **/}
        {/** Prison **/}
        {/** Sheep Wars **/}

        <StatsCard title="Sky Wars">
          <SkyWars global={stats.SW.global} />
        </StatsCard>

        {/** Spleef **/}

        <StatsCard title="TNT Run">
          <TNTRun global={stats.TNTRUN.global} />
        </StatsCard>

        <StatsCard title="TNT Tag">
          <TNTTag global={stats.TNTTAG.global} />
        </StatsCard>

        <StatsCard title="The Bridge">
          <TheBridge global={stats.BRIDGE.global} />
        </StatsCard>
      </Grid>
      {/** Turf Wars **/}
      {/** Аркады **/}
    </Grid>
  );
};

export default Stats;
