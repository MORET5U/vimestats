import Badges from 'components/Badges';
import Link from 'next/link';
import { FC, Fragment, memo } from 'react';

import { Grid, Paper, Tooltip, Typography } from '@material-ui/core';
import LensRoundedIcon from '@material-ui/icons/LensRounded';

import { IOnlineModer } from '../../interfaces';
import { useStyles } from './Styles';

type Props = {
  data: IOnlineModer;
};

const StaffCard: FC<Props> = ({ data: { username, skinHelm3D, online, flags, rankColor, humanizedRank } }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Link href="/player/[name]" as={"/player/" + encodeURIComponent(username)}>
        <a className={classes.link}>
          <Paper className="gridItem" variant="outlined">
            <Grid container spacing={1}>
              <Grid item>
                <img className="skinHelm" src={`${skinHelm3D}`} alt="Скин" width="64" />
              </Grid>

              <Grid item xs sm>
                <Typography variant="h5" className={classes.username}>
                  <Tooltip
                    title={<span className={classes.tooltip}>{online.message}</span>}
                    arrow
                    disableFocusListener
                    disableTouchListener
                    placement="top"
                  >
                    <LensRoundedIcon className="onlineIcon" style={{ verticalAlign: "-0.2rem" }} />
                  </Tooltip>{" "}
                  {username}
                </Typography>
                <Typography variant="h5" style={{ color: rankColor }} className={classes.rank}>
                  {flags !== undefined && flags > 0 && <Badges flags={flags} />} {humanizedRank}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </a>
      </Link>
    </Fragment>
  );
};

export default memo(StaffCard);
