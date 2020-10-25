import { Fragment } from "react";
import { NextPageContext, NextPage } from "next";
import { UserData } from "../../interfaces";
import Layout from "../../components/Layout";
import PlayerRenderer from "../../components/Player/PlayerRenderer";
import Axios, { AxiosError } from "axios";
import UnknownPlayer from "../../components/Player/UnknownPlayer";
import BadQuery from "../../components/Player/BadQuery";

type Props = {
  data?: UserData;
  errors?: any;
  res?: any;
};

const PlayerPage: NextPage<Props> = ({ errors, data }) => {
  if (errors) {
    if (errors.code == 404) {
      return <UnknownPlayer query={errors.query} />;
    }

    if (errors.code == 400) {
      return <BadQuery />;
    }

    return (
      <Layout title={`Error`}>
        <p>
          <span style={{ color: "red" }}>Error:</span> <span>{errors.message}</span>
        </p>
      </Layout>
    );
  }

  return <Fragment>{data && <PlayerRenderer data={data} />} </Fragment>;
};

PlayerPage.getInitialProps = async ({ query }: NextPageContext) => {
  const { name } = query;

  try {
    const apiReq = await Axios.get(`${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/api/player/${name?.toString()}`);
    return { data: apiReq.data };
  } catch (e) {
    let err: AxiosError = e;

    return {
      errors: {
        query: name!.toString(),
        message: err.message,
        code: err.response?.status,
      },
    };
  }
};

export default PlayerPage;
