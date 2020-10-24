import { FunctionComponent, Fragment } from "react";
import { IOnlineModer } from "../../interfaces";
import StaffCard from "./StaffCard";
import { Grid } from "@material-ui/core";

type Props = {
  data: IOnlineModer[];
};

export const Staff: FunctionComponent<Props> = ({ data }) => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        {data.map((moder) => (
          <Grid item xs={12} md={4} sm={12} key={moder.id}>
            <StaffCard data={moder} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
