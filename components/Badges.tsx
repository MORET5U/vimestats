import { Fragment, FC, ReactElement } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import { makeStyles } from "@material-ui/core";
import { Flags } from "utils/enums";

const useStyles = makeStyles(() => ({
  developer: {
    color: "#ad87f3 !important",
    fontSize: "1.45rem !important",
    verticalAlign: "-0.09em !important",
  },
  admin: {
    color: "#fbb848 !important",
    fontSize: "1.8rem !important",
    verticalAlign: "-0.28rem !important",
  },
  supporter: {
    color: "#d43e3e !important",
    fontSize: "1.7rem !important",
    verticalAlign: "-0.22rem !important",
  },
  bestmod: {
    color: "#4777e6 !important",
    fontSize: "1.75rem !important",
    verticalAlign: "-0.25rem !important",
  },
}));

interface TooltipProps {
  title: string;
  children: ReactElement;
}

const BadgeTooltip: FC<TooltipProps> = ({ children, title }) => (
  <Tooltip
    disableFocusListener
    disableTouchListener
    title={<span className="badgeTooltip">{title}</span>}
    placement="top"
  >
    {children}
  </Tooltip>
);

interface Props {
  flags: number;
}

const Badges: FC<Props> = ({ flags }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {(flags & Flags.developer) === Flags.developer && (
        <BadgeTooltip title="Разработчик VimeStats">
          <ThumbUpRoundedIcon className={"playerBadge " + classes.developer} />
        </BadgeTooltip>
      )}

      {(flags & Flags.admin) === Flags.admin && (
        <BadgeTooltip title="Админ Тысячелетия">
          <StarRoundedIcon className={"playerBadge " + classes.admin} />
        </BadgeTooltip>
      )}

      {(flags & Flags.supporter) === Flags.supporter && (
        <BadgeTooltip title="Раннее Поддержавшие">
          <FavoriteRoundedIcon className={"playerBadge " + classes.supporter} />
        </BadgeTooltip>
      )}

      {(flags & Flags.bestmod) === Flags.bestmod && (
        <BadgeTooltip title="Бывалый Модератор">
          <DoneOutlineRoundedIcon className={"playerBadge " + classes.bestmod} />
        </BadgeTooltip>
      )}
    </Fragment>
  );
};

export default Badges;
