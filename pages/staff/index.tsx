import { Component } from "react";
import Layout from "../../components/Layout";
import { IOnlineModer } from "../../interfaces";
import Axios, { AxiosError } from "axios";
import OnlineStaffRenderer from "../../components/OnlineStaff/OnlineStaffRenderer";

type Props = {
  data?: IOnlineModer[];
  errors?: any;
};

class StaffPage extends Component<Props> {
  public static getInitialProps = async () => {
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
      <Layout title="Онлайн модеры | VimeStats" description="Список онлайн модераторов на VimeWorld MiniGames">
        {data && <OnlineStaffRenderer data={data} />}
      </Layout>
    );
  }
}

export default StaffPage;
