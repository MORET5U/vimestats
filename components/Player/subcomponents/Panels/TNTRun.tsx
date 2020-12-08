import { FunctionComponent } from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import { ITntRun } from "vime-types/models/Stats";
import { WLR } from "../../../Stats/CustomRows";

const TNTRun: FunctionComponent<ITntRun> = ({ global }) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Typography>
        <strong>Игр сыграно:</strong> {global.games}
      </Typography>
      <Typography>
        <strong>Побед:</strong> {global.wins}
      </Typography>
      <WLR wins={global.wins} total={global.games} />

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Уничтожено блоков:</strong> {global.broken_blocks}
      </Typography>
    </Grid>
  </Grid>
);

export default TNTRun;
