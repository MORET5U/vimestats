import { Center, Icon, Image, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Paper from "components/Paper";
import { IModifiedUser, UserData } from "interfaces";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import { FC, memo } from "react";
import { FaRegSadTear } from "react-icons/fa";
import { PLAYER_3D_HEAD } from "utils/fallbacks";

type PlayerFriendsProps = Pick<UserData, "friends"> & Pick<IModifiedUser, "username">;

const PlayerFriends: FC<PlayerFriendsProps> = ({ friends, username }) => {
  const router = useRouter();

  const onRowClick = (username: string) => {
    router.push(`/player/${username}`);
  };

  return (
    <Paper>
      {isEmpty(friends) && (
        <Center>
          <Text fontSize="lg" my="16px">
            <Icon as={FaRegSadTear} boxSize={6} /> {username} довольно одинокий игрок...
          </Text>
        </Center>
      )}

      {!isEmpty(friends) && (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Скин</Th>
              <Th>Никнейм</Th>
            </Tr>
          </Thead>
          <Tbody>
            {friends.map((friend) => (
              <Tr key={friend.id}>
                <Td w="64px">
                  <Image
                    src={friend.skinHelm3D}
                    fallbackSrc={PLAYER_3D_HEAD}
                    m={0}
                    cursor="pointer"
                    onClick={() => onRowClick(friend.username)}
                  />
                </Td>
                <Td>
                  <Text
                    color={friend.rankColor}
                    fontSize="lg"
                    fontWeight="600"
                    cursor="pointer"
                    onClick={() => onRowClick(friend.username)}
                  >
                    [{friend.humanizedRank}] {friend.username}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Paper>
  );
};
export default memo(PlayerFriends);
