import Axios, { AxiosError } from "axios";
import Errors from "components/Errors";
import { NextPage, NextPageContext } from "next";
import { Fragment } from "react";
import Layout from "../../components/Layout";
import PlayerBase from "../../components/Player/PlayerBase";
import { UserData } from "../../interfaces";

type Props = {
  data?: UserData;
  errors?: any;
  res?: any;
};

const PlayerPage: NextPage<Props> = ({ errors, data }) => {
  if (errors) {
    if (errors.code == 404) {
      return (
        <Errors code={404} meaning="Not found" description={`Игрок ${errors.query} не найден.`} />
      );
    }

    if (errors.code == 400) {
      return (
        <Errors
          code={400}
          meaning="Bad request"
          description="Убедитесь в правильности запрошенного имени и попробуйте снова.<br />Не забывайте, что можно использовать только латинские символы!"
        />
      );
    }

    return (
      <Layout title={`Error`}>
        <p>
          <span style={{ color: "red" }}>Error:</span> <span>{errors.message}</span>
        </p>
      </Layout>
    );
  }

  return <Fragment>{data && <PlayerBase data={data} />} </Fragment>;
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
