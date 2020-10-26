import { IUser } from "vime-types/models/User";
import { IModifiedUser, FlagsBooleans } from "../interfaces";
import { v4 as uuid } from "uuid";
import badgesData from "./badgesValues.json";

const userProcessorDefaultOptions = {
  noGuild: false,
};

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
   * @param user - a user object
   */
  public static user = async (user: IUser, { noGuild } = userProcessorDefaultOptions): Promise<IModifiedUser> => {
    const newUser: IModifiedUser = { ...user };

    if (noGuild) {
      delete newUser.guild;
    }

    switch (user.rank) {
      case "ADMIN":
        newUser.humanizedRank = "Гл. Админ";
        newUser.rankColor = "#00bebe";
        break;
      case "DEV":
        newUser.humanizedRank = "Разработчик";
        newUser.rankColor = "#00bebe";
        break;
      case "ORGANIZER":
        newUser.humanizedRank = "Организатор";
        newUser.rankColor = "#00bebe";
        break;
      case "CHIEF":
        newUser.humanizedRank = "Гл. Модер";
        newUser.rankColor = "#4777e6";
        break;
      case "WARDEN":
        newUser.humanizedRank = "Пр. Модер";
        newUser.rankColor = "#4777e6";
        break;
      case "MODER":
        newUser.humanizedRank = "Модер";
        newUser.rankColor = "#4777e6";
        break;
      case "MAPLEAD":
        newUser.humanizedRank = "Гл. Билдер";
        newUser.rankColor = "#009c00";
        break;
      case "BUILDER":
        newUser.humanizedRank = "Билдер";
        newUser.rankColor = "#009c00";
        break;
      case "YOUTUBE":
        newUser.humanizedRank = "YouTube";
        newUser.rankColor = "#fe3f3f";
        break;
      case "IMMORTAL":
        newUser.humanizedRank = "Immortal";
        newUser.rankColor = "#e800d5";
        break;
      case "HOLY":
        newUser.humanizedRank = "Holy";
        newUser.rankColor = "#ffba2d";
        break;

      case "PREMIUM":
        newUser.humanizedRank = "Premium";
        newUser.rankColor = "#00dada";
        break;

      case "VIP":
        newUser.humanizedRank = "VIP";
        newUser.rankColor = "#00be00";
        break;

      default:
        newUser.humanizedRank = "Игрок";
        newUser.rankColor = undefined;
        break;
    }

    newUser.flags = Object.getOwnPropertyDescriptor(badgesData, `${newUser.username}`)?.value || 0;

    newUser.playedHours = user.playedSeconds / 3600;
    newUser.playedMinutes = user.playedSeconds / 60;
    newUser.levelPercentage = user.levelPercentage * 100;
    newUser.skinHelm = `https://skin.vimeworld.ru/helm/${user.username}.png?request=${uuid()}`;
    newUser.skinHelm3D = `https://skin.vimeworld.ru/helm/3d/${user.username}.png?request=${uuid()}`;

    return newUser;
  };
}
