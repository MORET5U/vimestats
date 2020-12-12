import { Box, Text, Avatar, HStack, VStack, Link as CLink, Badge } from "@chakra-ui/react";
import React, { FC } from "react";
import moment from "moment";

import { IPostArticle } from "../../interfaces";
import { randomLetters } from "../../utils/randomizer";

type Props = {
  post: IPostArticle;
};

const DemotionsCard: FC<Props> = ({ post }) => {
  const now = moment();
  const postedAt = moment.unix(post.date);

  return (
    <Box w="100%" borderWidth="1px" borderRadius="lg" p={4}>
      <HStack spacing={2}>
        <Avatar src="https://vimeworld.ru/images/fluidicon.png" />
        <VStack spacing={0.5} align="stretch">
          <CLink
            href={`https://vk.com/wall-170072131_${post.id}`}
            target="_blank"
            rel="noopener noreferrer"
            fontWeight="bold"
            mb={0}
          >
            VimeWorld Персонал
          </CLink>

          <Text mt={0} fontSize="sm">
            {postedAt.format("DD.MM.YYYY")}{" "}
            {now.diff(postedAt, "hours") <= 48 && (
              <Badge variant="outline" colorScheme="orange">
                НОВОЕ
              </Badge>
            )}
          </Text>
        </VStack>
      </HStack>

      <Text mt={3} fontSize="md">
        {post.text.split("\n").map((line: string) => {
          return (
            <span key={randomLetters(12)}>
              {line.replace(/[(\u{2764}|\u{1F49A})]/gu, "")}
              <br />
            </span>
          );
        })}
      </Text>
    </Box>
  );
};

export default DemotionsCard;
