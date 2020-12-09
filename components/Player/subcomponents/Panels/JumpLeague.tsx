import { FunctionComponent } from "react";
import { IJumpLeague } from "vime-types/models/Stats";

import { Box, Divider, Grid, Typography } from "@material-ui/core";

import { KDR, WLR } from "../../../Stats/CustomRows";

const JumpLeague: FunctionComponent<IJumpLeague> = ({ global }) => {
  const { checkpoints, deaths, games, kills, wins } = global;

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Typography>
          <strong>Игр сыграно:</strong> {games}
        </Typography>
        <Typography>
          <strong>Побед:</strong> {wins}
        </Typography>
        <WLR wins={wins} total={games} />

        <Box my={2}>
          <Divider />
        </Box>

        <Typography>
          <strong>Убийств:</strong> {kills}
        </Typography>
        <Typography>
          <strong>Смертей:</strong> {deaths}
        </Typography>
        <KDR kills={kills} deaths={deaths} />

        <Box my={2}>
          <Divider />
        </Box>

        <Typography>
          <strong>Чекпоинтов:</strong> {checkpoints}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default JumpLeague;
