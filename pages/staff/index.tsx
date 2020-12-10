import Axios, { AxiosError } from "axios";
import StaffCard from "components/OnlineStaff/StaffCard";
import { NextPage } from "next";

import { Container, SimpleGrid } from "@chakra-ui/react";

import Layout from "../../components/Layout";
import { IOnlineModer } from "../../interfaces";

type Props = {
  data?: IOnlineModer[];
  errors?: any;
};

const StaffPage: NextPage<Props> = ({ data, errors }) => {
  if (errors) {
    return (
      <Layout title={`Error`}>
        <p>
          <span style={{ color: "red" }}>Error:</span> <span>{errors.message}</span>
        </p>
      </Layout>
    );
  }

  return (
    <Layout title="Онлайн модеры | VimeStats" description="Список онлайн модераторов на VimeWorld MiniGames">
      <Container maxW="6xl">
        {data !== undefined && data.length <= 0 && <p>Тишина...</p>}

        {data !== undefined && data.length > 0 && (
          <>
            <SimpleGrid minChildWidth="300px" gap={3}>
              {data.map((moder) => (
                <StaffCard key={moder.id} data={moder} />
              ))}
            </SimpleGrid>
          </>
        )}
      </Container>
    </Layout>
  );
};

StaffPage.getInitialProps = async () => {
  try {
    const req = await Axios.get(`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/api/online?sort=staff`);
    const data = await req.data;

    return { data };
  } catch (e) {
    let err: AxiosError = e;
    return {
      errors: { message: err.message, code: err.response?.status },
    };
  }
};

export default StaffPage;
