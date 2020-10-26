import { IUser } from "vime-types/models/User";
import { IModifiedUser, FlagsBooleans } from "../interfaces";
import { v4 as uuid } from "uuid";

export class Processors {
  /** Processes RAW user flag into an object of booleans
   *
   * @param flags - RAW user flag, number
   */
  public static flags = async (flags: number = 0x00): Promise<FlagsBooleans> => ({
    isDeveloper: (flags & 0x01) === 0x01,
    isVimeAdmin: (flags & 0x02) === 0x02,
    isProjectSupporter: (flags & 0x04) === 0x04,
    isContributor: (flags & 0x08) === 0x08,
    isGoodModerator: (flags & 0x10) === 0x10,
    isBanHammer3000: (flags & 0x20) === 0x20,
  });

  /** Processes user object
   *
   * @param player - a user object
   */
  public static player = async (player: IUser): Promise<IModifiedUser> => {
    const processed: IModifiedUser = player;

    switch (player.rank) {
      case "ADMIN":
        processed.humanizedRank = "Гл. Админ";
        processed.rankColor = "#00bebe";
        break;
      case "DEV":
        processed.humanizedRank = "Разработчик";
        processed.rankColor = "#00bebe";
        break;
      case "ORGANIZER":
        processed.humanizedRank = "Организатор";
        processed.rankColor = "#00bebe";
        break;
      case "CHIEF":
        processed.humanizedRank = "Гл. Модер";
        processed.rankColor = "#4777e6";
        break;
      case "WARDEN":
        processed.humanizedRank = "Пр. Модер";
        processed.rankColor = "#4777e6";
        break;
      case "MODER":
        processed.humanizedRank = "Модер";
        processed.rankColor = "#4777e6";
        break;
      case "MAPLEAD":
        processed.humanizedRank = "Гл. Билдер";
        processed.rankColor = "#009c00";
        break;
      case "BUILDER":
        processed.humanizedRank = "Билдер";
        processed.rankColor = "#009c00";
        break;
      case "YOUTUBE":
        processed.humanizedRank = "YouTube";
        processed.rankColor = "#fe3f3f";
        break;
      case "IMMORTAL":
        processed.humanizedRank = "Immortal";
        processed.rankColor = "#e800d5";
        break;
      case "HOLY":
        processed.humanizedRank = "Holy";
        processed.rankColor = "#ffba2d";
        break;

      case "PREMIUM":
        processed.humanizedRank = "Premium";
        processed.rankColor = "#00dada";
        break;

      case "VIP":
        processed.humanizedRank = "VIP";
        processed.rankColor = "#00be00";
        break;

      default:
        processed.humanizedRank = "Игрок";
        processed.rankColor = undefined;
        break;
    }

    processed.playedHours = player.playedSeconds / 3600;
    processed.playedMinutes = player.playedSeconds / 60;
    processed.levelPercentage = player.levelPercentage * 100;
    processed.skinHelm = `https://skin.vimeworld.ru/helm/${player.username}.png?request=${uuid()}`;
    processed.skinHelm3D = `https://skin.vimeworld.ru/helm/3d/${player.username}.png?request=${uuid()}`;

    return processed;
  };
}
