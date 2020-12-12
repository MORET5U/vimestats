import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { Container, Box, Input } from "@chakra-ui/react";

import Layout from "../components/Layout";
import { MySweetAlert } from "../components/MySweetAlert";

const IndexPage: NextPage = () => {
  const initialState = { query: "" };

  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setState({ query: event.target.value.trim() });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.query.trim().length < 2) {
      MySweetAlert.fire({
        title: "Ошибка",
        text: "Запрос слишком короткий!",
        icon: "error",
        confirmButtonText: "Попробовать снова",
      });
    } else {
      router.push("/player/[name]", `/player/${encodeURIComponent(state.query.trim())}`);
    }
  };

  return (
    <Layout>
      <Container maxW="3xl">
        <Box marginY={4}>
          <form onSubmit={handleSubmit}>
            <Input
              value={state.query}
              onChange={handleChange}
              placeholder="Введите никнейм"
              focusBorderColor="brand.200"
            />
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
