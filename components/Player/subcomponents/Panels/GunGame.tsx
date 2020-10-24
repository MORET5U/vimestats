import { FunctionComponent } from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import { WLR } from "../../../CustomRows";
import { IGunGame } from "vime-types/models/Stats";

type Props = Omit<IGunGame, "season">;

const GunGame: FunctionComponent<Props> = ({ global }) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Typography>
        <strong>Собрано уровненй:</strong> {global["levels"]}
      </Typography>

      <Box my={2}>
        <Divider />
      </Box>

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
      {/* <Typography>
          <strong>Смертей:</strong> {global.deaths}
        </Typography>
        {global.deaths > 0 && (
          <Typography>
            <strong>Соотношение У/С:</strong> {(global.kills / global.deaths).toFixed(2)}%
          </Typography>
        )} */}
    </Grid>
  </Grid>
);

export default GunGame;
