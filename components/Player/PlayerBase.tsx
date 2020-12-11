import { Box, Container, Grid, GridItem, VStack } from "@chakra-ui/react";
import { isNil, merge, pick } from "lodash";
import React from "react";
import { UserData } from "../../interfaces";
import Layout from "../Layout";
import PlayerLevel from "./PlayerLevel";
import PlayerSkin from "./PlayerSkin";
import PlayerSmallCard from "./PlayerSmallCard";
import PlayerTimeAndStatus from "./PlayerTimeAndStatus";

type Props = {
  data: UserData;
};

const PlayerBase: React.FunctionComponent<Props> = ({ data }) => {
  const { user, session, friends, guild, stats, skin, cape } = data;

  const playerSmallCard = merge(user, { guild });
  const playerTimeAndStatusProps = merge(session!, pick(user, ["playedSeconds", "lastSeen"]));
  const playerLevelProps = pick(user, ["level", "levelPercentage"]);
  const playerSkinProps = merge(pick(user, ["username"]), { skin, cape });

  return (
    <Layout
      title={"[" + user?.humanizedRank + "] " + user?.username + " | VimeStats"}
      description={"Статистика игрока VimeWorld - " + user?.username + " | Уровень: " + user?.level}
      color={user?.rankColor || "transparent"}
      iconURL={user?.skinHelm3D}
    >
      <Container maxW="6xl">
        <Box>
          {!isNil(user) && (
            <Grid
              templateColumns={{ lg: "3fr 6fr", base: "1fr" }}
              templateRows={{ lg: "1fr", base: "1fr 1fr 1fr 1fr 1fr 1fr" }}
              gap={2}
            >
              <GridItem>
                <VStack spacing={2}>
                  <PlayerSmallCard {...playerSmallCard} />
                  <PlayerTimeAndStatus {...playerTimeAndStatusProps} />
                  <PlayerLevel {...playerLevelProps} />
                  <PlayerSkin {...playerSkinProps} />
                </VStack>
              </GridItem>

              <GridItem>
                <Box w="100%" h="120px" bg="green.200"></Box>
              </GridItem>
            </Grid>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default PlayerBase;
