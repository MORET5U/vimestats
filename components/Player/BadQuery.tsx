import { Box, Button, Container, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import Layout from "../Layout";

const BadQuery: FunctionComponent = () => {
  return (
    <Layout title="Ошибка | VimeStats">
      <Container maxW="2xl">
        <Box mt={20} mb={2}>
          <Text fontSize="2xl">
            <strong>400:</strong> Bad request
          </Text>
        </Box>

        <Divider />

        <Box my={2}>
          <Text fontSize="lg">
            Убедитесь в правильности запрошенного имени и попробуйте снова.
            <br />
            Не забывайте, что можно использовать только латинские символы!
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

export default BadQuery;
