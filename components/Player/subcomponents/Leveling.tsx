import { Fragment, FunctionComponent } from "react";

import { Box, Divider, Typography } from "@material-ui/core";

import { IModifiedUser } from "../../../interfaces";

interface Props {
  user: IModifiedUser;
}

const Leveling: FunctionComponent<Props> = ({ user }) => {
  return (
    <Fragment>
      <Box mb={1}>
        <Typography variant="h6" gutterBottom>
          <strong>УРОВЕНЬ</strong>
        </Typography>
      </Box>

      <Divider />

      <Box mt={1}>
        <Typography variant="body1">
          <strong>Текущий:</strong> {user.level}
        </Typography>
        <Typography variant="body1">
          <strong>Прогресс:</strong> {Math.round(user.levelPercentage)}%
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Leveling;
