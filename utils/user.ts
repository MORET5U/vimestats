import { IModifiedUser } from "interfaces";
import { IUser, UserRank } from "vime-types/models/User";
import { v4 as uuid } from "uuid";

import badgesData from "./badgesValues.json";

export class UserModified implements IModifiedUser {
  public readonly id: number;
  public readonly username: string;
  public readonly name: string;

  public readonly flags: number;

  public readonly rank: UserRank;
  public readonly humanizedRank?: string;
  public readonly rankColor?: string;

  public readonly playedSeconds: number;
  public readonly playedHours: number;
  public readonly playedMinutes: number;

  public readonly level: number;
  public readonly levelPercentage: number;

  public readonly lastSeen: number;

  public readonly skinHelm?: string;
  public readonly skinHelm3D?: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.username = user.username;
    this.name = user.username;
    this.level = user.level;
    this.rank = user.rank;
    this.lastSeen = user.lastSeen;

    switch (user.rank) {
      case "ADMIN":
        this.humanizedRank = "Гл. Админ";
        this.rankColor = "#00bebe";
        break;
      case "DEV":
        this.humanizedRank = "Разработчик";
        this.rankColor = "#00bebe";
        break;
      case "ORGANIZER":
        this.humanizedRank = "Организатор";
        this.rankColor = "#00bebe";
        break;
      case "CHIEF":
        this.humanizedRank = "Гл. Модер";
        this.rankColor = "#4777e6";
        break;
      case "WARDEN":
        this.humanizedRank = "Пр. Модер";
        this.rankColor = "#4777e6";
        break;
      case "MODER":
        this.humanizedRank = "Модер";
        this.rankColor = "#4777e6";
        break;
      case "MAPLEAD":
        this.humanizedRank = "Гл. Билдер";
        this.rankColor = "#009c00";
        break;
      case "BUILDER":
        this.humanizedRank = "Билдер";
        this.rankColor = "#009c00";
        break;
      case "YOUTUBE":
        this.humanizedRank = "YouTube";
        this.rankColor = "#fe3f3f";
        break;
      case "IMMORTAL":
        this.humanizedRank = "Immortal";
        this.rankColor = "#e800d5";
        break;
      case "HOLY":
        this.humanizedRank = "Holy";
        this.rankColor = "#ffba2d";
        break;

      case "PREMIUM":
        this.humanizedRank = "Premium";
        this.rankColor = "#00dada";
        break;

      case "VIP":
        this.humanizedRank = "VIP";
        this.rankColor = "#00be00";
        break;

      default:
        this.humanizedRank = "Игрок";
        this.rankColor = undefined;
        break;
    }

    this.flags = Object.getOwnPropertyDescriptor(badgesData, `${this.username}`)?.value || 0;

    this.playedSeconds = user.playedSeconds;
    this.playedHours = user.playedSeconds / 3600;
    this.playedMinutes = user.playedSeconds / 60;

    this.levelPercentage = user.levelPercentage * 100;

    this.lastSeen = user.lastSeen;

    this.skinHelm = `https://skin.vimeworld.ru/helm/${user.username}.png?request=${uuid()}`;
    this.skinHelm3D = `https://skin.vimeworld.ru/helm/3d/${user.username}.png?request=${uuid()}`;
  }

  public isDeveloper() {
    return (this.flags & 0x01) === 0x01;
  }

  public isVimeAdmin() {
    return (this.flags & 0x02) === 0x02;
  }

  public isProjectSupporter() {
    return (this.flags & 0x04) === 0x04;
  }

  public isContributor() {
    return (this.flags & 0x08) === 0x08;
  }

  public isGoodModerator() {
    return (this.flags & 0x10) === 0x10;
  }
}
