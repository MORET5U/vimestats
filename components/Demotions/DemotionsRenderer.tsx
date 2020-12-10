import { useRouter } from "next/router";
import { FC, useState, ChangeEvent, FormEvent } from "react";

import { Box, Text, VStack, Container, Input, InputRightElement, InputGroup, IconButton } from "@chakra-ui/react";

import { IPostArticle } from "../../interfaces";
import { MySweetAlert } from "../MySweetAlert";
import DemotionsCard from "./DemotionsCard";
import { MdClear } from "react-icons/md";

type Props = {
  data: IPostArticle[];
};

const DemotionsRenderer: FC<Props> = ({ data }) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const searchWithQuery = (query: string) => {
    router.push("/demotions?search=" + encodeURIComponent(query.toString()));
  };

  const resetData = () => {
    setQuery("");
    router.push("/demotions");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query!.length < 1) {
      MySweetAlert.fire({
        title: "Ошибка",
        text: "Запрос слишком короткий!",
        icon: "error",
        confirmButtonText: "Попробовать снова",
      });
    } else {
      searchWithQuery(query!);
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  return (
    <Container maxW="4xl">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input value={query} placeholder="Введите запрос" onChange={handleInput} focusBorderColor="brand.200" />
          <InputRightElement>
            <IconButton icon={<MdClear />} aria-label="Clear Query" variant="outlined" onClick={resetData} />
          </InputRightElement>
        </InputGroup>
      </form>

      <Box my={3}>
        <VStack spacing="16px">
          {data.length > 0 && data.map((post: IPostArticle) => <DemotionsCard key={post.id} post={post} />)}
        </VStack>
        {data.length <= 0 && (
          <Text fontSize="2xl">
            <strong>404:</strong> Ничего не найдено
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default DemotionsRenderer;
