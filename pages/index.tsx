import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { Container, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { MySweetAlert } from "../components/MySweetalert";

const IndexPage: NextPage = () => {
  const initialState = { query: "" };

  const router = useRouter();
  const [state, setState] = useState(initialState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ query: e.target.value.trim() });
  };

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
      router.push(
        "/player/[name]",
        `/player/${encodeURIComponent(state.query.trim())}`
      );
    }
  };

  return (
    <Layout>
      <Container maxWidth="md">
        <Box my={4} component="div">
          <form onSubmit={handleSubmit}>
            <TextField
              onInput={handleInput}
              id="outlined-basic"
              label="Введите никнейм"
              variant="outlined"
              fullWidth
              type="text"
              autoComplete="username"
            />
          </form>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
