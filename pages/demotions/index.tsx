import Axios, { AxiosError } from "axios";
import { NextPage } from "next";
import { Fragment } from "react";

import DemotionsRenderer from "../../components/Demotions/DemotionsRenderer";
import Layout from "../../components/Layout";
import { IPostArticle } from "../../interfaces";

type Props = {
  data?: IPostArticle[];
  search?: any;
  errors?: any;
};

const DemotionsPage: NextPage<Props> = ({ data, errors }) => {
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
    <Fragment>
      <Layout
        title="Снятия и принятия | VimeStats"
        description="Свежая информация о снятых и принятых на должность Модераторах VimeWorld MiniGames"
      >
        {data !== undefined ? <DemotionsRenderer data={data} /> : <></>}
      </Layout>
    </Fragment>
  );
};

DemotionsPage.getInitialProps = async ({ query }) => {
  const { search } = query;

  try {
    let reqURL;

    if (!search) reqURL = `${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/api/demotions`;
    else reqURL = `${process.env.NEXT_PUBLIC_WEBSITE_BASE_URL}/api/demotions?search=${search}`;

    const req = await Axios.get(reqURL);
    const data = await req.data;

    return { data: data.items, search };
  } catch (e) {
    let err: AxiosError = e;

    return {
      errors: { message: err.message, code: err.response?.status },
    };
  }
};

export default DemotionsPage;
