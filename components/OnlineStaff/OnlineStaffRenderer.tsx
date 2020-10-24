import { Fragment, FunctionComponent } from "react";
import { IOnlineModer } from "../../interfaces";
import { Container } from "@material-ui/core";
import { Staff } from "./Staff";

type Props = {
  data: IOnlineModer[];
};

const OnlineStaffRenderer: FunctionComponent<Props> = ({ data }) => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        {data.length > 0 && <Staff data={data} />}
        {data.length <= 0 && <p>Тишина...</p>}
      </Container>
    </Fragment>
  );
};

export default OnlineStaffRenderer;
