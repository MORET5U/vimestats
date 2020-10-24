import { FunctionComponent } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";

type Props = {
  title: string;
};

const StatsCard: FunctionComponent<Props> = ({ children, title }) => (
  <ExpansionPanel variant="outlined">
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      className="expansionPanelSummary"
    >
      {title}
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
  </ExpansionPanel>
);

export default StatsCard;
