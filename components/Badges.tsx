import { Fragment } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import MemoryRoundedIcon from "@material-ui/icons/MemoryRounded";
import { IFlagsBooleans } from "../interfaces";

const Badges = ({ flags }: { flags: IFlagsBooleans }) => {
  return (
    <Fragment>
      {flags.isVimeAdmin && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Админ Тысячелетия</span>}
          placement="top"
        >
          <StarRoundedIcon className="playerBadge vimeAdminBadge" />
        </Tooltip>
      )}

      {flags.isDeveloper && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Разработчик VimeStats</span>}
          placement="top"
        >
          <MemoryRoundedIcon className="playerBadge developerBadge" />
        </Tooltip>
      )}

      {flags.isProjectSupporter && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Поддержавший проект</span>}
          placement="top"
        >
          <FavoriteRoundedIcon className="playerBadge projectSupporterBadge" />
        </Tooltip>
      )}

      {flags.isGoodModerator && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">Бывалый Модератор</span>}
          placement="top"
        >
          <DoneOutlineRoundedIcon className="playerBadge goodModeratorBadge" />
        </Tooltip>
      )}

      {flags.isBanHammer3000 && (
        <Tooltip
          disableFocusListener
          disableTouchListener
          title={<span className="badgeTooltip">БАНХАММЕР 3000</span>}
          placement="top"
        >
          <GavelRoundedIcon className="playerBadge banHammer3000" />
        </Tooltip>
      )}
    </Fragment>
  );
};

export default Badges;
