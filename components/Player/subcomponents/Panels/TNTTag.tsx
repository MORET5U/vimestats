import { FunctionComponent } from "react";
import { ITntTag } from "vime-types/models/Stats";
import { Grid, Typography, Box, Divider } from "@material-ui/core";
import { WLR } from "../../../CustomRows";

const TNTTag: FunctionComponent<ITntTag> = ({ global }) => (
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
        <strong>Убийств:</strong> {global.kills}
      </Typography>
    </Grid>
  </Grid>
);

export default TNTTag;
