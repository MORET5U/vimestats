import { Box, Breadcrumb, BreadcrumbItem, Button, Container, Grid, GridItem, VStack } from "@chakra-ui/react";
import { isNil, merge, pick } from "lodash";
import React, { useState } from "react";
import { UserData } from "../../interfaces";
import Layout from "../Layout";
import PlayerFriends from "./PlayerFriends";
import PlayerLevel from "./PlayerLevel";
import PlayerSkin from "./PlayerSkin";
import PlayerSmallCard from "./PlayerSmallCard";
import PlayerStats from "./PlayerStats";
import PlayerTimeAndStatus from "./PlayerTimeAndStatus";

type Props = {
  data: UserData;
};

type SelectedTab = "stats" | "friends";

const PlayerBase: React.FunctionComponent<Props> = ({ data }) => {
  const { user, session, friends, guild, stats, skin, cape } = data;

  const [currentTab, setTab] = useState<SelectedTab>("stats");

  const playerSmallCard = merge(user, { guild });
  const playerTimeAndStatusProps = merge(session!, pick(user, ["playedSeconds", "lastSeen"]));
  const playerLevelProps = pick(user, ["level", "levelPercentage"]);
  const playerSkinProps = merge(pick(user, ["username"]), { skin, cape });
  const playerFriendsProps = merge({ friends }, pick(user, ["username"]));

  return (
    <Layout
      title={`[${user.humanizedRank}] ${user.username} — VimeStats`}
      description={`${user.humanizedRank} - ${user.rank} уровень`}
      color={user?.rankColor || "transparent"}
      iconURL={user?.skinHelm3D}
    >
      <Container maxW="6xl">
        <Box>
          {!isNil(user) && (
            <Grid templateColumns={{ lg: "3fr 6fr", base: "1fr" }} gap={2}>
              <GridItem>
                <VStack spacing={2}>
                  <PlayerSmallCard {...playerSmallCard} />
                  <PlayerTimeAndStatus {...playerTimeAndStatusProps} />
                  <PlayerLevel {...playerLevelProps} />
                  <PlayerSkin {...playerSkinProps} />
                </VStack>
              </GridItem>

              <GridItem>
                <VStack>
                  <Box w="100%" mb="8px">
                    <Breadcrumb spacing="8px">
                      <BreadcrumbItem>
                        <Button
                          variant="ghost"
                          onClick={() => setTab("stats")}
                          isActive={currentTab === "stats"}
                          size="sm"
                        >
                          Статистика
                        </Button>
                      </BreadcrumbItem>

                      <BreadcrumbItem>
                        <Button
                          variant="ghost"
                          onClick={() => setTab("friends")}
                          isActive={currentTab === "friends"}
                          size="sm"
                        >
                          Друзья
                        </Button>
                      </BreadcrumbItem>
                    </Breadcrumb>
                  </Box>

                  <PlayerStats isShown={currentTab === "stats"} {...stats} />
                  <PlayerFriends isShown={currentTab === "friends"} {...playerFriendsProps} />
                </VStack>
              </GridItem>
            </Grid>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default PlayerBase;
