import { IUser } from "vime-types/models/User";
import { IModifiedUser, FlagsBooleans } from "../interfaces";
import { v4 as uuid } from "uuid";
import badgesData from "./badgesValues.json";

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
    const newPlayer: IModifiedUser = { ...player };

    switch (player.rank) {
      case "ADMIN":
        newPlayer.humanizedRank = "Гл. Админ";
        newPlayer.rankColor = "#00bebe";
        break;
      case "DEV":
        newPlayer.humanizedRank = "Разработчик";
        newPlayer.rankColor = "#00bebe";
        break;
      case "ORGANIZER":
        newPlayer.humanizedRank = "Организатор";
        newPlayer.rankColor = "#00bebe";
        break;
      case "CHIEF":
        newPlayer.humanizedRank = "Гл. Модер";
        newPlayer.rankColor = "#4777e6";
        break;
      case "WARDEN":
        newPlayer.humanizedRank = "Пр. Модер";
        newPlayer.rankColor = "#4777e6";
        break;
      case "MODER":
        newPlayer.humanizedRank = "Модер";
        newPlayer.rankColor = "#4777e6";
        break;
      case "MAPLEAD":
        newPlayer.humanizedRank = "Гл. Билдер";
        newPlayer.rankColor = "#009c00";
        break;
      case "BUILDER":
        newPlayer.humanizedRank = "Билдер";
        newPlayer.rankColor = "#009c00";
        break;
      case "YOUTUBE":
        newPlayer.humanizedRank = "YouTube";
        newPlayer.rankColor = "#fe3f3f";
        break;
      case "IMMORTAL":
        newPlayer.humanizedRank = "Immortal";
        newPlayer.rankColor = "#e800d5";
        break;
      case "HOLY":
        newPlayer.humanizedRank = "Holy";
        newPlayer.rankColor = "#ffba2d";
        break;

      case "PREMIUM":
        newPlayer.humanizedRank = "Premium";
        newPlayer.rankColor = "#00dada";
        break;

      case "VIP":
        newPlayer.humanizedRank = "VIP";
        newPlayer.rankColor = "#00be00";
        break;

      default:
        newPlayer.humanizedRank = "Игрок";
        newPlayer.rankColor = undefined;
        break;
    }

    newPlayer.flags = Object.getOwnPropertyDescriptor(badgesData, `${newPlayer.username}`)?.value || 0;

    newPlayer.playedHours = player.playedSeconds / 3600;
    newPlayer.playedMinutes = player.playedSeconds / 60;
    newPlayer.levelPercentage = player.levelPercentage * 100;
    newPlayer.skinHelm = `https://skin.vimeworld.ru/helm/${player.username}.png?request=${uuid()}`;
    newPlayer.skinHelm3D = `https://skin.vimeworld.ru/helm/3d/${player.username}.png?request=${uuid()}`;

    return newPlayer;
  };
}
