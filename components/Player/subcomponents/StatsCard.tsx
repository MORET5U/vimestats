import { FunctionComponent } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionSummary, Accordion, AccordionDetails } from "@material-ui/core";

type Props = {
  title: string;
};

const StatsCard: FunctionComponent<Props> = ({ children, title }) => (
  <Accordion variant="outlined">
    <AccordionSummary expandIcon={<ExpandMoreIcon />} className="expansionPanelSummary">
      {title}
    </AccordionSummary>
    <AccordionDetails>{children}</AccordionDetails>
  </Accordion>
);

export default StatsCard;
