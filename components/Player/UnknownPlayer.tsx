import { Box, Button, Container, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import Layout from "../Layout";

type Props = {
  query: string;
};

const UnknownPlayer: FunctionComponent<Props> = ({ query }) => {
  return (
    <Layout title="Ошибка | VimeStats">
      <Container maxW="2xl">
        <Box mt={20} mb={2}>
          <Text fontSize="2xl">
            <strong>404:</strong> Not found
          </Text>
        </Box>

        <Divider />

        <Box my={2}>
          <Text fontSize="lg">
            Игрок <strong>{query}</strong> не найден.
          </Text>
        </Box>

        <Divider />

        <Box mt={2}>
          <Link href="/" as="/">
            <Button variant="ghost">НА ГЛАВНУЮ</Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default UnknownPlayer;
