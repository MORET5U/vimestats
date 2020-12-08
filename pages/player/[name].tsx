import Axios, { AxiosError } from "axios";
import { NextPage, NextPageContext } from "next";
import { Fragment } from "react";

import Layout from "../../components/Layout";
import BadQuery from "../../components/Player/BadQuery";
import PlayerRenderer from "../../components/Player/PlayerRenderer";
import UnknownPlayer from "../../components/Player/UnknownPlayer";
import { UserData } from "../../interfaces";

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
    const data = apiReq.data;
    return { data };
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
