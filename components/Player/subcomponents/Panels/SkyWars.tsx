import { FunctionComponent } from 'react';
import { ISkyWars } from 'vime-types/models/Stats';

import { Box, Divider, Grid, Typography } from '@material-ui/core';

import { KDR, WLR } from '../../../Stats/CustomRows';

type Props = Omit<ISkyWars, "season">;

const SkyWars: FunctionComponent<Props> = ({ global }) => (
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
        <strong>Текущая серия побед:</strong> {global["currentWinStreak"]}
      </Typography>
      <Typography>
        <strong>Макс. серия побед:</strong> {global["winStreak"]}
      </Typography>

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
        <strong>Блоков поставлено:</strong> {global["blocksPlaced"]}
      </Typography>
      <Typography>
        <strong>Блоков сломано:</strong> {global["blocksBroken"]}
      </Typography>
      <Typography>
        <strong>Выстрелов из лука:</strong> {global["arrowsFired"]}
      </Typography>
    </Grid>
  </Grid>
);

export default SkyWars;
