import { Divider, Text } from "@chakra-ui/react";
import Paper from "components/Paper";
import { IModifiedUser } from "interfaces";
import { FC, Fragment } from "react";

type PlayerLevelProps = Pick<IModifiedUser, "level" | "levelPercentage">;

const PlayerLevel: FC<PlayerLevelProps> = ({ level, levelPercentage }) => {
  const untilNextLevel = Math.round(100 - levelPercentage);

  return (
    <Fragment>
      <Paper>
        <Text mb="8px" fontSize="xl" fontWeight="700">
          УРОВЕНЬ
        </Text>

        <Divider />

        <Text mt="8px">
          <strong>Текущий: </strong> {level}
        </Text>

        <Text>
          <strong>До следующего уровня: </strong> {untilNextLevel}%
        </Text>
      </Paper>
    </Fragment>
  );
};

export default PlayerLevel;
