import { FunctionComponent } from "react";
import { Typography, Grid, Divider, Box } from "@material-ui/core";
import { IDuels } from "vime-types/models/Stats";

type Props = Omit<IDuels, "season">;

const Duels: FunctionComponent<Props> = ({ global }) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Typography>
        <strong>Игр сыграно:</strong> {global["total_games"]}
      </Typography>
      <Typography>
        <strong>Побед:</strong> {global["total_wins"]}
      </Typography>
      {global["total_games"] > 0 && (
        <Typography>
          <strong>Общий процент побед:</strong>{" "}
          {((global["total_wins"] / global["total_games"]) * 100).toFixed(2)}%
        </Typography>
      )}

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Макс. серия победы:</strong> {global["maxstrike"]}
      </Typography>

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Одиночных игр:</strong> {global["solo_games"]}
      </Typography>
      <Typography>
        <strong>Одиночных побед:</strong> {global["solo_wins"]}
      </Typography>
      {global["solo_games"] > 0 && (
        <Typography>
          <strong>Процент одиночных побед:</strong>{" "}
          {((global["solo_wins"] / global["solo_games"]) * 100).toFixed(2)}%
        </Typography>
      )}

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Командных игр:</strong> {global["team_games"]}
      </Typography>
      <Typography>
        <strong>Командных побед:</strong> {global["team_wins"]}
      </Typography>
      {global["team_games"] > 0 && (
        <Typography>
          <strong>Процент командных побед:</strong>{" "}
          {((global["team_wins"] / global["team_games"]) * 100).toFixed(2)}%
        </Typography>
      )}

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Ранкед игр:</strong> {global["ranked_games"]}
      </Typography>
      <Typography>
        <strong>Ранкед побед:</strong> {global["ranked_wins"]}
      </Typography>

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Potions побед:</strong> {global["wins_potion"]}
      </Typography>
      <Typography>
        <strong>Classic побед:</strong> {global["wins_classic"]}
      </Typography>
      <Typography>
        <strong>UHC побед:</strong> {global["wins_uhc"]}
      </Typography>
      <Typography>
        <strong>BWH побед:</strong> {global["wins_bwh"]}
      </Typography>
      <Typography>
        <strong>Bow побед:</strong> {global["wins_bow"]}
      </Typography>
      <Typography>
        <strong>OP побед:</strong> {global["wins_op"]}
      </Typography>
    </Grid>
  </Grid>
);

export default Duels;
