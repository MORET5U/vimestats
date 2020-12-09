import Link from "next/link";
import { FunctionComponent } from "react";

import { Box, Button, Container, Divider, Typography } from "@material-ui/core";

import Layout from "../Layout";

type Props = {
  query: string;
};

const UnknownPlayer: FunctionComponent<Props> = ({ query }) => {
  return (
    <Layout title="Ошибка | VimeStats">
      <Container maxWidth="md">
        <Box mt={20} mb={2}>
          <Typography variant="h3">
            <strong>404:</strong> Not found
          </Typography>
        </Box>

        <Divider />

        <Box my={2}>
          <Typography variant="h5">
            Игрок <strong>{query}</strong> не найден.
          </Typography>
        </Box>

        <Divider />

        <Box mt={2}>
          <Link href="/" as="/">
            <Button variant="outlined">НА ГЛАВНУЮ</Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default UnknownPlayer;
