import { Box, Button, Container, Divider, Text } from "@chakra-ui/react";
import { isString } from "lodash";
import Link from "next/link";
import { FC, ReactElement } from "react";
import Layout from "./Layout";

interface ErrorsProps {
  code: string | number;
  meaning: string;
  description: string | ReactElement | JSX.Element;
}

const Errors: FC<ErrorsProps> = ({ code, meaning, description }) => {
  return (
    <Layout title="Ошибка | VimeStats">
      <Container maxW="2xl">
        <Box mt={20} mb={2}>
          <Text fontSize="2xl">
            <strong>{code}:</strong> {meaning}
          </Text>
        </Box>

        <Divider />

        <Box my={2}>{(isString(description) && <Text fontSize="lg">{description}</Text>) || description}</Box>

        <Divider />

        <Box mt={2}>
          <Link href="/" as="/">
            <Button>НА ГЛАВНУЮ</Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default Errors;
