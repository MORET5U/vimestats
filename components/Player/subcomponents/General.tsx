import Badges from "components/Badges";
import { Fragment, FunctionComponent } from "react";
import { IGuildSimple } from "vime-types/models/Guild";

import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";

import { IModifiedUser } from "../../../interfaces";

type Props = {
  user: IModifiedUser;
  guild: IGuildSimple | null;
};

const useStyles = makeStyles(() => ({
  rank: {
    fontWeight: "normal",
  },
  username: {
    fontWeight: "normal",
  },
  avatar: {
    width: 64,
    height: 64,
  },
}));

const General: FunctionComponent<Props> = ({ user, guild }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Fragment>
        <Grid container spacing={1}>
          <Grid item>
            <Avatar variant="rounded" src={user.skinHelm3D} className={classes.avatar} />
          </Grid>

          <Grid item xs sm>
            <Typography variant="h5" className={classes.username}>
              {user.username} <Badges flags={user.flags!} />
            </Typography>
            <Typography variant="h6" className={classes.rank} style={{ color: user.rankColor }}>
              {user?.humanizedRank?.toUpperCase()}
            </Typography>
          </Grid>
        </Grid>
      </Fragment>

      <Grid container spacing={1}>
        <Grid item>
          {guild && (
            <Typography className="isInGuild" variant="body2">
              Состоит в гильдии "{guild.name}"
            </Typography>
          )}
          {!guild && (
            <Typography className="isInGuild" variant="body2">
              Не состоит в гильдии
            </Typography>
          )}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default General;
