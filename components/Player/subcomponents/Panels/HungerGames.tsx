import { FunctionComponent } from 'react';
import { IHungerGames } from 'vime-types/models/Stats';

import { Box, Divider, Grid, Tooltip, Typography } from '@material-ui/core';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';

import { WLR } from '../../../Stats/CustomRows';

type Props = Omit<IHungerGames, "season">;

const HungerGames: FunctionComponent<Props> = ({ global }) => (
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
        <Tooltip
          arrow
          disableFocusListener
          disableTouchListener
          title={
            <span className="badgeTooltip">
              Приведённые данные могут отличаться от реальных, поскольку они не
              были предоставлены API VimeWorld и рассчитаны сайтом, исходя из
              уже имеющихся данных.
            </span>
          }
        >
          <InfoRoundedIcon fontSize="inherit" />
        </Tooltip>{" "}
        <strong>Смертей:</strong> {global["games"] - global["wins"]}
      </Typography>
      {global["games"] - global["wins"] > 0 && (
        <Typography>
          <Tooltip
            arrow
            disableFocusListener
            disableTouchListener
            title={
              <span className="badgeTooltip">
                Приведённые данные могут отличаться от реальных, поскольку они
                не были предоставлены API VimeWorld и рассчитаны сайтом, исходя
                из уже имеющихся данных.
              </span>
            }
          >
            <InfoRoundedIcon fontSize="inherit" />
          </Tooltip>{" "}
          <strong>Соотношение У/С:</strong>{" "}
          {(global["kills"] / (global["games"] - global["wins"])).toFixed(2)}
        </Typography>
      )}
    </Grid>
  </Grid>
);

export default HungerGames;
