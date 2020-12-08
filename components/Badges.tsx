import { Fragment, FC, ReactElement } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import MemoryRoundedIcon from "@material-ui/icons/MemoryRounded";
import { makeStyles } from "@material-ui/core";
import { Flags } from "utils/enums";

const useStyles = makeStyles((forcedColor?: string) => ({
  developer: {
    color: !forcedColor ? forcedColor : "#bb86fc",
    fontSize: "1.75rem",
    verticalAlign: "-0.18em",
  },
  admin: {
    color: !forcedColor ? forcedColor : "#fbb848",
    fontSize: "1.8rem",
    verticalAlign: "-0.28rem",
  },
  supporter: {
    color: !forcedColor ? forcedColor : "#d43e3e",
    fontSize: "1.7rem",
    verticalAlign: "-0.22rem",
  },
  bestmod: {
    color: !forcedColor ? forcedColor : "#4777e6",
    fontSize: "1.75rem",
    verticalAlign: "-0.25rem",
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
  forcedColor?: string;
}

const Badges: FC<Props> = ({ flags, forcedColor = undefined }) => {
  const classes = useStyles(forcedColor);

  return (
    <Fragment>
      {(flags & Flags.developer) === Flags.developer && (
        <BadgeTooltip title="Разработчик VimeStats">
          <MemoryRoundedIcon className={"playerBadge " + classes.developer} />
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
