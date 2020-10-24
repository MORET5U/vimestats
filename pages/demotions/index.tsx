import { Fragment, Component } from "react";
import Layout from "../../components/Layout";
import { Container } from "@material-ui/core";
import { IPostArticle } from "../../interfaces";
import Axios, { AxiosError } from "axios";
import DemotionsRenderer from "../../components/Demotions/DemotionsRenderer";
import { NextPageContext } from "next";

type Props = {
  data: IPostArticle[];
  search?: any;
  errors?: any;
};

class DemotionsPage extends Component<Props> {
  public static getInitialProps = async ({ query }: NextPageContext) => {
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

  public render() {
    const { data, errors } = this.props;

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
          <Container maxWidth="md">{data && <DemotionsRenderer data={data} />}</Container>
        </Layout>
      </Fragment>
    );
  }
}

export default DemotionsPage;
