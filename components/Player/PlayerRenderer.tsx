import React from "react";
import { UserData } from "../../interfaces";
import { Grid, Container, Paper, Box } from "@material-ui/core";
import Layout from "../Layout";
import General from "./subcomponents/General";
import Times from "./subcomponents/Times";
import Leveling from "./subcomponents/Leveling";
import Friends from "./subcomponents/Friends";
import Stats from "./subcomponents/Stats";
import Skin from "./subcomponents/Skin";

type Props = {
  data: UserData;
};

const PlayerRenderer: React.FunctionComponent<Props> = ({ data }) => {
  const { user, session, friends, guild, stats, skin, cape } = data;

  return (
    <Layout
      title={"[" + user?.humanizedRank + "] " + user?.username + " | VimeStats"}
      description={"Статистика игрока VimeWorld - " + user?.username + " | Уровень: " + user?.level}
      color={user?.rankColor || "transparent"}
      iconURL={user?.skinHelm3D}
    >
      <Container maxWidth="lg">
        <Box>
          {user && (
            <Grid container spacing={2}>
              <Grid item md={4} xs={12} sm={12}>
                <Grid container spacing={1} direction="column">
                  <Grid item md xs={12} sm={12}>
                    <Paper className="gridItem" variant="outlined">
                      <General user={user} guild={guild} />
                    </Paper>
                  </Grid>

                  <Grid item md xs={12} sm={12}>
                    <Paper className="gridItem" variant="outlined">
                      <Times session={session} user={user} />
                    </Paper>
                  </Grid>

                  <Grid item md xs={12} sm={12}>
                    <Paper className="gridItem" variant="outlined">
                      <Leveling user={user} />
                    </Paper>
                  </Grid>

                  <Grid item md xs={12} sm={12}>
                    <Paper className="gridItem" variant="outlined">
                      <Skin username={user.username} skin={skin} cape={cape} />
                    </Paper>
                  </Grid>

                  <Grid item md xs={12} sm={12}>
                    <Friends user={user} friends={friends} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={8} xs={12} sm={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Stats stats={stats} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default PlayerRenderer;
