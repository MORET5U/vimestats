import { FunctionComponent } from 'react';
import { IAnnihilation } from 'vime-types/models/Stats';

import { Box, Divider, Grid, Typography } from '@material-ui/core';

type Props = Omit<IAnnihilation, "season">;

const Annihilation: FunctionComponent<Props> = ({ global }) => (
  <Grid container direction="row">
    <Grid item xs={12}>
      <Box>
        <Typography>
          <strong>Убийств:</strong> {global["kills"]}
        </Typography>
        <Typography>
          <strong>Убийств (лук):</strong> {global["bowkills"]}
        </Typography>
      </Box>

      <Box my={2}>
        <Divider />
      </Box>

      <Box>
        <Typography>
          <strong>Срублено дерево:</strong> {global["wood"]}
        </Typography>
        <Typography>
          <strong>Добыто руд:</strong> {global["ores"]}
        </Typography>
        <Typography>
          <strong>Ударов по базам:</strong> {global["nexus"]}
        </Typography>
        <Typography>
          <strong>Добыто земли:</strong> {global["digged"]}
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

export default Annihilation;
