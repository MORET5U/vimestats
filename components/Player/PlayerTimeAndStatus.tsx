import { Divider, Icon, Text, Tooltip } from "@chakra-ui/react";
import Paper from "components/Paper";
import { IModifiedUser } from "interfaces";
import { upperFirst } from "lodash";
import moment from "moment";
import { FC, Fragment } from "react";
import { FaCircle } from "react-icons/fa";
import { IUserSession } from "vime-types/models/User";

type LastSeenProps = Pick<IModifiedUser, "lastSeen">;

const LastSeen: FC<LastSeenProps> = ({ lastSeen }) => {
  const label = upperFirst(moment.unix(lastSeen).format("dddd, DD MMMM yyyy HH:mm"));

  return (
    <Fragment>
      <strong>Последний вход: </strong>
      <Tooltip label={label} placement="top" shouldWrapChildren>
        {moment.unix(lastSeen).format("DD.MM.yyyy")}
      </Tooltip>
    </Fragment>
  );
};

type OnlineProps = Pick<IUserSession, "message">;

const Online: FC<OnlineProps> = ({ message }) => {
  return (
    <Fragment>
      <Icon className="onlineIcon" verticalAlign="-0.02em" fill="green.300" as={FaCircle} boxSize={3} />{" "}
      <strong>{message}</strong>
    </Fragment>
  );
};

interface PlayerTimeAndStatusProps
  extends IUserSession,
    Pick<IModifiedUser, "playedSeconds">,
    Pick<IModifiedUser, "lastSeen"> {}

const PlayerTimeAndStatus: FC<PlayerTimeAndStatusProps> = ({ value: isOnline, lastSeen, playedSeconds, message }) => {
  const playedHours = Math.floor(moment.duration(playedSeconds, "s").asHours());
  const playedMinutes = Math.floor(moment.duration(playedSeconds, "s").asMinutes());

  return (
    <Fragment>
      <Paper>
        <Text mb="8px" fontSize="xl" fontWeight="700">
          ВРЕМЯ
        </Text>

        <Divider />

        <Text mt="8px">
          <strong>Проведено в игре: </strong>
          {playedSeconds > 3600 ? `${playedHours} ч.` : `${playedMinutes} мин.`}
        </Text>

        <Text cursor="default">
          {!isOnline && <LastSeen lastSeen={lastSeen} />}
          {isOnline && <Online message={message} />}
        </Text>
      </Paper>
    </Fragment>
  );
};

export default PlayerTimeAndStatus;
