import Axios, { AxiosError } from "axios";
import StaffCard from "components/OnlineStaff/StaffCard";
import { NextPage } from "next";

import { Container, Grid } from "@material-ui/core";

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
      <Container maxWidth="lg">
        {data !== undefined && data.length <= 0 && <p>Тишина...</p>}

        {data !== undefined && data.length > 0 && (
          <>
            <Grid container spacing={2}>
              {data.map((moder) => (
                <Grid item xs={12} md={4} sm={12} key={moder.id}>
                  <StaffCard data={moder} />
                </Grid>
              ))}
            </Grid>
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
