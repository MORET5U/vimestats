import Link from "next/link";
import { FunctionComponent } from "react";

import { Box, Button, Container, Divider, Typography } from "@material-ui/core";

import Layout from "../Layout";

const BadQuery: FunctionComponent = () => {
  return (
    <Layout title="Ошибка | VimeStats">
      <Container maxWidth="md">
        <Box mt={20} mb={2}>
          <Typography variant="h3">
            <strong>400:</strong> Bad request
          </Typography>
        </Box>

        <Divider />

        <Box my={2}>
          <Typography variant="h5">
            Убедитесь в правильности запрошенного имени и попробуйте снова.
            <br />
            Не забывайте, что можно использовать только латинские символы!
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

export default BadQuery;
