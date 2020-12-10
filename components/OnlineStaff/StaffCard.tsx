import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Badges from "components/Badges";
import Link from "next/link";
import { FC, Fragment, memo } from "react";
import { PLAYER_3D_HEAD } from "utils/fallbacks";
import { IOnlineModer } from "../../interfaces";
type Props = {
  data: IOnlineModer;
};

const StaffCard: FC<Props> = ({ data: { username, skinHelm3D, online, flags, rankColor, humanizedRank } }) => {
  return (
    <Fragment>
      <Link href="/player/[name]" as={"/player/" + encodeURIComponent(username)}>
        <a className="staff_card__link">
          <Box w="100%" borderWidth="1px" borderRadius="lg" p={3}>
            <HStack spacing={2}>
              <Image src={skinHelm3D} fallbackSrc={PLAYER_3D_HEAD} width="64px" height="64px" />

              <VStack spacing={0} align="flex-start">
                <Text fontSize="2xl" my={0}>
                  {username}
                </Text>

                <HStack spacing={0}>
                  {flags !== undefined && flags > 0 && <Badges flags={flags} />}
                  <Text fontSize="2xl" color={rankColor} my={0}>
                    {humanizedRank?.toUpperCase()}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </a>
      </Link>
    </Fragment>
  );
};

export default memo(StaffCard);
