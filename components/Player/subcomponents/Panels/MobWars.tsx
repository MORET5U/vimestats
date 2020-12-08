import { FunctionComponent } from 'react';
import { IMobWars } from 'vime-types/models/Stats';

import { Box, Divider, Grid, Typography } from '@material-ui/core';

import { WLR } from '../../../Stats/CustomRows';

type Props = Omit<IMobWars, "season">;

const MobWars: FunctionComponent<Props> = ({ global }) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Typography>
        <strong>Игр сыграно:</strong> {global.games}
      </Typography>
      <Typography>
        <strong>Побед:</strong> {global["wins"]}
      </Typography>
      <WLR wins={global["wins"]} total={global["games"]} />

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Убито мобов:</strong> {global["mobsKilled"]}
      </Typography>
      <Typography>
        <strong>Отправлено мобов:</strong> {global["mobsSended"]}
      </Typography>

      <Box my={2}>
        <Divider />
      </Box>

      <Typography>
        <strong>Макс. доход: </strong> {global["maxIncome"]}
      </Typography>
    </Grid>
  </Grid>
);

export default MobWars;
