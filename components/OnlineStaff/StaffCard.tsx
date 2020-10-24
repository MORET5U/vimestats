import { memo, Fragment, FunctionComponent } from "react";
import { Paper, Grid, Typography, Tooltip } from "@material-ui/core";
import Link from "next/link";
import LensRoundedIcon from "@material-ui/icons/LensRounded";
import { IOnlineModer } from "../../interfaces";
import { useStyles } from "./Styles";

type Props = {
  data: IOnlineModer;
};

const StaffCard: FunctionComponent<Props> = ({ data }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Link href="/player/[name]" as={"/player/" + encodeURIComponent(data.username)}>
        <a className={classes.link}>
          <Paper className="gridItem" variant="outlined">
            <Grid container spacing={1}>
              <Grid item>
                <img className="skinHelm" src={`${data.skinHelm}`} alt="Скин" width="64" />
              </Grid>

              <Grid item xs sm>
                <Typography variant="h5" className={classes.username}>
                  <Tooltip
                    title={<span className={classes.tooltip}>{data.online.message}</span>}
                    arrow
                    disableFocusListener
                    disableTouchListener
                    placement="top"
                  >
                    <LensRoundedIcon className="onlineIcon" style={{ verticalAlign: "-0.2rem" }} />
                  </Tooltip>{" "}
                  {data.username}
                </Typography>
                <Typography variant="h5" style={{ color: data.rankColor }} className={classes.rank}>
                  {data.humanizedRank}
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
