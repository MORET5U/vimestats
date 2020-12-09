import { FunctionComponent } from "react";
import { ILuckyWars } from "vime-types/models/Stats";

import { Box, Divider, Grid, Typography } from "@material-ui/core";

import { KDR, WLR } from "../../../Stats/CustomRows";

const KitPVP: FunctionComponent<ILuckyWars> = ({ global }) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Typography>
        <strong>Игр сыграно:</strong> {global.games}
      </Typography>
      <Typography>
        <strong>Побед:</strong> {global.wins}
      </Typography>
      <WLR wins={global["wins"]} total={global.games} />

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Убийств:</strong> {global.kills}
      </Typography>
      <Typography>
        <strong>Смертей:</strong> {global.deaths}
      </Typography>
      <KDR kills={global["kills"]} deaths={global.deaths} />

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>ЛакиБлоков сломано:</strong> {global.lucky_blocks}
      </Typography>
    </Grid>
  </Grid>
);

export default KitPVP;
