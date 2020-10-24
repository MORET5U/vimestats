import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  username: {
    fontWeight: "normal",
  },
  link: {
    color: "inherit",
    transition: "all 0.2s ease-in-out",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.7,
    },
  },
  rank: {
    fontWeight: "normal",
    textTransform: "uppercase",
  },
  tooltip: {
    fontSize: "0.75rem",
  },
}));
