import { Tooltip } from "@chakra-ui/react";
import { FC, Fragment } from "react";

export const AssumedValued: FC = ({ children }) => (
  <Fragment>
    <Tooltip label="Приведённые данные вычислены на стороне VimeStats и могут являться неточными!" shouldWrapChildren>
      {children}
    </Tooltip>
  </Fragment>
);
