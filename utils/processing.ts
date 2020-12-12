import { v4 as uuid } from "uuid";
import { IUser } from "vime-types/models/User";
import { IModifiedUser } from "../interfaces";
import overridesData from "./processOverrides.json";

const userProcessorDefaultOptions = {
  noGuild: false,
};

export const processUser = async (user: IUser, { noGuild } = userProcessorDefaultOptions): Promise<IModifiedUser> => {
  let newUser: IModifiedUser = { ...user };

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

  newUser.flags = 0;
  newUser.playedHours = user.playedSeconds / 3600;
  newUser.playedMinutes = user.playedSeconds / 60;
  newUser.levelPercentage = user.levelPercentage * 100;
  newUser.skinHelm = `https://skin.vimeworld.ru/helm/${user.username}.png?request=${uuid()}`;
  newUser.skinHelm3D = `https://skin.vimeworld.ru/helm/3d/${user.username}.png?request=${uuid()}`;

  const overrides = Object.getOwnPropertyDescriptor(overridesData, `${newUser.username}`)?.value;
  if (overrides) {
    newUser = { ...newUser, ...overrides };
  }

  return newUser;
};

export const countWinRate = (total: number, wins: number) => {
  return total > 0 ? (wins / total) * 100 : wins * 100;
};

export const countKillDeathRate = (kills: number, deaths: number) => {
  return deaths > 0 ? kills / deaths : kills;
};
