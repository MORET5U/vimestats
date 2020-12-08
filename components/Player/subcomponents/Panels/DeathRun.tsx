import { FunctionComponent } from "react";
import { Typography, Grid } from "@material-ui/core";
import { IDeathRun } from "vime-types/models/Stats";
import { WLR } from "../../../Stats/CustomRows";

type Props = Omit<IDeathRun, "season">;

const DeathRun: FunctionComponent<Props> = ({ global }) => {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Typography>
          <strong>Игр сыграно:</strong> {global.games}
        </Typography>
        <Typography>
          <strong>Побед:</strong> {global.wins}
        </Typography>
        <WLR total={global.games} wins={global.wins} />
      </Grid>
    </Grid>
  );
};

export default DeathRun;
