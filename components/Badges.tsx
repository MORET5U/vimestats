import { Icon, Tooltip } from "@chakra-ui/react";
import { FC, Fragment, ReactElement } from "react";
import { FaCheck, FaHeart, FaStar, FaThumbsUp } from "react-icons/fa";
import { Flags } from "utils/enums";

interface TooltipProps {
  title: string;
  children: ReactElement;
}

const BadgeTooltip: FC<TooltipProps> = ({ children, title }) => (
  <Tooltip label={title} placement="top" shouldWrapChildren>
    {children}
  </Tooltip>
);

interface Props {
  flags: number;
}

const Badges: FC<Props> = ({ flags }) => {
  return (
    <Fragment>
      {(flags & Flags.developer) === Flags.developer && (
        <BadgeTooltip title="Разработчик VimeStats">
          <Icon as={FaThumbsUp} className="playerBadge" color="brand.200" boxSize={6} />
        </BadgeTooltip>
      )}

      {(flags & Flags.admin) === Flags.admin && (
        <BadgeTooltip title="Админ Тысячелетия">
          <Icon as={FaStar} className="playerBadge" color="orange.300" boxSize={6} />
        </BadgeTooltip>
      )}

      {(flags & Flags.supporter) === Flags.supporter && (
        <BadgeTooltip title="Раннее Поддержавшие">
          <Icon as={FaHeart} className="playerBadge" color="red.600" boxSize={6} />
        </BadgeTooltip>
      )}

      {(flags & Flags.bestmod) === Flags.bestmod && (
        <BadgeTooltip title="Бывалый Модератор">
          <Icon as={FaCheck} className="playerBadge" color="#4777e6" boxSize={6} />
        </BadgeTooltip>
      )}
    </Fragment>
  );
};

export default Badges;
