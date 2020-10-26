import { Fragment, FC } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import MemoryRoundedIcon from "@material-ui/icons/MemoryRounded";

type Props = {
  flags: number;
};

const Badges: FC<Props> = ({ flags }) => {
  return (
    <Fragment>
      {(flags & 0x02) === 0x02 && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Админ Тысячелетия</span>}
          placement="top"
        >
          <StarRoundedIcon className="playerBadge vimeAdminBadge" />
        </Tooltip>
      )}

      {(flags & 0x01) === 0x01 && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Разработчик VimeStats</span>}
          placement="top"
        >
          <MemoryRoundedIcon className="playerBadge developerBadge" />
        </Tooltip>
      )}

      {(flags & 0x04) === 0x04 && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Поддержавший проект</span>}
          placement="top"
        >
          <FavoriteRoundedIcon className="playerBadge projectSupporterBadge" />
        </Tooltip>
      )}

      {(flags & 0x10) === 0x10 && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Бывалый Модератор</span>}
          placement="top"
        >
          <DoneOutlineRoundedIcon className="playerBadge goodModeratorBadge" />
        </Tooltip>
      )}
    </Fragment>
  );
};

export default Badges;
