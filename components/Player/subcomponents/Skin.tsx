import { FunctionComponent, Fragment } from "react";
import { Divider, Typography, Grid, Box } from "@material-ui/core";
import Skin3d from "../../Skin3d";

type Props = {
  username: string;
  skin: string;
};

const Skin: FunctionComponent<Props> = ({ username, skin }) => {
  return (
    <Fragment>
      <Box mb={1}>
        <Typography variant="h6">
          <strong>СКИН</strong>
        </Typography>
      </Box>

      <Divider />

      <Grid container alignContent="center" alignItems="center" justify="center">
        <Grid item>
          <Skin3d skin={skin} username={username} height={375} enableZoom={false} walkingSpeed={1} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Skin;
