import { FunctionComponent } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionSummary, Accordion, AccordionDetails, makeStyles, Typography } from "@material-ui/core";

type Props = {
  title: string;
  secondaryTitle?: string;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontWeight: "bold",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const StatsCard: FunctionComponent<Props> = ({ children, title, secondaryTitle }) => {
  const classes = useStyles();

  return (
    <Accordion variant="outlined">
      <AccordionSummary expandIcon={<ExpandMoreIcon />} className="expansionPanelSummary">
        <Typography className={classes.heading}>{title}</Typography>
        {secondaryTitle && <Typography className={classes.secondaryHeading}>{secondaryTitle}</Typography>}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default StatsCard;
