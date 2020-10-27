import { Fragment, FunctionComponent } from "react";
import { IOnlineModer } from "../../interfaces";
import { Container, Grid } from "@material-ui/core";
import StaffCard from "./StaffCard";

type Props = {
  data: IOnlineModer[];
};

const OnlineStaffRenderer: FunctionComponent<Props> = ({ data }) => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        {data.length <= 0 && <p>Тишина...</p>}

        {data.length > 0 && (
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
    </Fragment>
  );
};

export default OnlineStaffRenderer;
