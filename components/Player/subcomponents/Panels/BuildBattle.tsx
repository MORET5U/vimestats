import { FunctionComponent } from 'react';
import { IBuildBattle } from 'vime-types/models/Stats';

import { Grid, Typography } from '@material-ui/core';

import { WLR } from '../../../Stats/CustomRows';

type Props = Omit<IBuildBattle, "season">;

const BuildBattle: FunctionComponent<Props> = ({ global }) => {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Typography>
          <strong>Игр сыграно:</strong> {global["games"]}
        </Typography>
        <Typography>
          <strong>Побед:</strong> {global["wins"]}
        </Typography>
        <WLR wins={global["wins"]} total={global["games"]} />
      </Grid>
    </Grid>
  );
};

export default BuildBattle;
