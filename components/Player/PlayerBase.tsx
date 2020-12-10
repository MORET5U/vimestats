import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { UserData } from "../../interfaces";
import Layout from "../Layout";

type Props = {
  data: UserData;
};

const PlayerBase: React.FunctionComponent<Props> = ({ data }) => {
  const { user, session, friends, guild, stats, skin, cape } = data;

  return (
    <Layout
      title={"[" + user?.humanizedRank + "] " + user?.username + " | VimeStats"}
      description={"Статистика игрока VimeWorld - " + user?.username + " | Уровень: " + user?.level}
      color={user?.rankColor || "transparent"}
      iconURL={user?.skinHelm3D}
    >
      <Container maxW="4xl">
        <Box>
          {user && (
            <SimpleGrid>
              
            </SimpleGrid>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default PlayerBase;
