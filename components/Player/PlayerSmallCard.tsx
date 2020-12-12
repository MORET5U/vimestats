import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import Badges from "components/Badges";
import Paper from "components/Paper";
import { IModifiedUser, UserData } from "interfaces";
import { isNil } from "lodash";
import { FC } from "react";
import { PLAYER_3D_HEAD } from "utils/fallbacks";

type PlayerSmallCardProps = Omit<IModifiedUser, "guild"> & Pick<UserData, "guild">;

const PlayerSmallCard: FC<PlayerSmallCardProps> = ({
  username,
  skinHelm3D,
  humanizedRank,
  rankColor,
  flags,
  guild,
}) => {
  return (
    <Paper>
      <VStack align="stretch">
        <HStack>
          <Image src={skinHelm3D} fallbackSrc={PLAYER_3D_HEAD} w="64px" h="64px" />

          <VStack align="stretch" spacing={0}>
            <Text fontSize="2xl" my={0}>
              {username} {flags !== undefined && flags > 0 && <Badges flags={flags} />}
            </Text>
            <Text fontSize="xl" my={0} color={rankColor}>
              {humanizedRank?.toUpperCase()}
            </Text>
          </VStack>
        </HStack>

        <Text color="gray.500">
          {isNil(guild) && "Не состоит гильдии"}
          {!isNil(guild) && `Состоит в гильдии ${guild.name}`}
        </Text>
      </VStack>
    </Paper>
  );
};

export default PlayerSmallCard;
