import { Fragment, FunctionComponent } from "react";
import { Typography, Tooltip, Divider, Box } from "@material-ui/core";
import LensRoundedIcon from "@material-ui/icons/LensRounded";
import { IModifiedUser } from "../../../interfaces";
import { IUserSession } from "vime-types/models/User";

const lastSeen = (timestamp: number): string | React.ReactElement => {
  if (timestamp <= 0) return "неизвестно";

  let now = new Date();
  let date = new Date(timestamp * 1000);

  let day = "0" + date.getDate();
  let month = "0" + (date.getMonth() + 1);
  let year = date.getFullYear();
  let hour = "0" + date.getHours();
  let min = "0" + date.getMinutes();
  let sec = "0" + date.getSeconds();

  if (now.getDate() === date.getDate())
    return `сегодня в ${hour.substr(-2)}:${min.substr(-2)}`;

  return (
    <span>
      <Tooltip
        title={
          <span className="tooltipModified">
            {day.substr(-2)}.{month.substr(-2)}.{year} в {hour.substr(-2)}:
            {min.substr(-2)}:{sec.substr(-2)}
          </span>
        }
        arrow
        disableFocusListener
        disableTouchListener
        placement="top"
      >
        <span style={{ cursor: "pointer" }}>
          {day.substr(-2)}.{month.substr(-2)}.{year}
        </span>
      </Tooltip>
    </span>
  );
};

type Props = {
  user: IModifiedUser;
  session?: IUserSession;
};

const Times: FunctionComponent<Props> = ({ user, session }) => {
  return (
    <Fragment>
      {session && (
        <Fragment>
          <Box mb={1}>
            <Typography variant="h6" gutterBottom>
              <strong>ВРЕМЯ</strong>
            </Typography>
          </Box>

          <Divider />

          <Box mt={1}>
            <Typography variant="body1">
              <strong>Проведено в игре:</strong>{" "}
              {user.playedHours < 1 ? (
                <span>{Math.round(user.playedMinutes)} мин.</span>
              ) : (
                <span>{Math.round(user.playedHours)} ч.</span>
              )}
            </Typography>
            <Typography variant="body1">
              {!session.value ? (
                <span>
                  <strong>Последний вход: </strong>
                  {lastSeen(user.lastSeen)}
                </span>
              ) : (
                <span>
                  <Tooltip
                    title="Онлайн"
                    arrow
                    disableFocusListener
                    disableTouchListener
                    placement="top"
                  >
                    <LensRoundedIcon className="onlineIcon" />
                  </Tooltip>{" "}
                  {session.message}
                </span>
              )}
            </Typography>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Times;
