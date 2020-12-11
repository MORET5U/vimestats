import { Center, Divider, Text } from "@chakra-ui/react";
import Paper from "components/Paper";
import Skin3d from "components/Skin3d";
import { IModifiedUser, UserData } from "interfaces";
import { FC, Fragment } from "react";

type PlayerSkinProps = Pick<UserData, "skin" | "cape"> & Pick<IModifiedUser, "username">;

const PlayerSkin: FC<PlayerSkinProps> = (props) => {
  return (
    <Fragment>
      <Paper>
        <Text mb="8px" fontWeight="bold" fontSize="xl">
          СКИН
        </Text>

        <Divider />

        <Center mt="8px">
          <Skin3d {...props} height={350} enableZoom={false} walkingSpeed={1} />
        </Center>
      </Paper>
    </Fragment>
  );
};

export default PlayerSkin;
