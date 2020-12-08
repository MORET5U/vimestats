import { FunctionComponent } from 'react';
import { IMurder } from 'vime-types/models/Stats';

import { Box, Divider, Grid, Typography } from '@material-ui/core';

import { WLR } from '../../../Stats/CustomRows';

const MurderMystery: FunctionComponent<IMurder> = ({ global }) => {
  const {
    games,
    kills,
    total_wins,
    wins_as_detective,
    wins_as_innocent,
    wins_as_maniac,
  } = global;

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Typography>
          <strong>Игр сыграно:</strong> {games}
        </Typography>
        <Typography>
          <strong>Всего побед:</strong> {total_wins}
        </Typography>
        <Typography>
          <strong>Побед в роли невиновного:</strong> {wins_as_innocent}
        </Typography>
        <Typography>
          <strong>Побед в роли детектива:</strong> {wins_as_detective}
        </Typography>
        <Typography>
          <strong>Побед в роли убийцы:</strong> {wins_as_maniac}
        </Typography>

        <WLR wins={total_wins} total={games} isTotal={true} />

        <Box my={2}>
          <Divider />
        </Box>

        <Typography>
          <strong>Убийств:</strong> {kills}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MurderMystery;
