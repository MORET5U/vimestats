import { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
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
      </Grid>
      <Grid item>
        <StatsCard title="Bed Wars">
          <BedWars global={stats.BW.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Block Party">
          <BlockParty global={stats.BP.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Build Battle">
          <BuildBattle global={stats.BB.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Clash Point">
          <ClashPoint global={stats.CP.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Death Run">
          <DeathRun global={stats.DR.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Duels">
          <Duels global={stats.DUELS.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Gun Game">
          <GunGame global={stats.GG.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Hunger Games">
          <HungerGames global={stats.HG.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Jump League">
          <JumpLeague global={stats.JUMPLEAGUE.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="KitPVP">
          <KitPVP global={stats.KPVP.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Lucky Wars">
          <LuckyWars global={stats.LUCKYWARS.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="MobWars">
          <MobWars global={stats.MW.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="Murder Mystery">
          <MurderMystery global={stats.MURDER.global} />
        </StatsCard>
      </Grid>
      {/** Paintball **/}
      {/** Prison **/}
      {/** Sheep Wars **/}
      <Grid item>
        <StatsCard title="Sky Wars">
          <SkyWars global={stats.SW.global} />
        </StatsCard>
      </Grid>
      {/** Spleef **/}
      <Grid item>
        <StatsCard title="TNT Run">
          <TNTRun global={stats.TNTRUN.global} />
        </StatsCard>
      </Grid>
      <Grid item>
        <StatsCard title="TNT Tag">
          <TNTTag global={stats.TNTTAG.global} />
        </StatsCard>
      </Grid>
      <Grid item>
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
