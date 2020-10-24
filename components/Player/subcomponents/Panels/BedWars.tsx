import { FunctionComponent } from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import { WLR, KDR } from "../../../CustomRows";
import { IBedWars } from "vime-types/models/Stats";

type Props = Omit<IBedWars, "season">;

const BedWars: FunctionComponent<Props> = ({ global }) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Typography>
        <strong>Игр сыграно:</strong> {global["games"]}
      </Typography>
      <Typography>
        <strong>Побед:</strong> {global["wins"]}
      </Typography>
      <WLR wins={global["wins"]} total={global["games"]} />

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Убийств:</strong> {global["kills"]}
      </Typography>
      <Typography>
        <strong>Смертей:</strong> {global["deaths"]}
      </Typography>
      <KDR kills={global["kills"]} deaths={global["deaths"]} />

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Кроватей сломано:</strong> {global["bedBreaked"]}
      </Typography>
    </Grid>
  </Grid>
);

export default BedWars;
