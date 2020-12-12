import { IGuildSimple } from "vime-types/models/Guild";
import { IUserStatsGroup } from "vime-types/models/Stats";
import { IUser, IUserGuild, IUserMatch, IUserSession } from "vime-types/models/User";

export type FlagsBooleans = {
  isDeveloper: boolean;
  isVimeAdmin: boolean;
  isProjectSupporter: boolean;
  isContributor: boolean;
  isGoodModerator: boolean;
  isBanHammer3000: boolean;
};

export interface baseUser {
  user: IModifiedUser;
  session: IUserSession;
  guild: IUserGuild;
  friends: IModifiedUser[];
}

export type UserData = {
  user: IModifiedUser;
  guild: IGuildSimple | null;
  session?: IUserSession;
  /** @deprecated Not used anywhere */
  matches?: IUserMatch[];
  friends: IModifiedUser[];
  stats: IUserStatsGroup;
  skin: string;
  cape?: string;
};

export interface IFlagsBooleans {
  isDeveloper?: boolean;
  isVimeAdmin?: boolean;
  isProjectSupporter?: boolean;
  isContributor?: boolean;
  isGoodModerator?: boolean;
}

export interface IModifiedUser extends Omit<IUser, "guild"> {
  guild?: IUserGuild | null;
  humanizedRank?: string;
  rankColor?: string;
  playedHours?: number;
  playedMinutes?: number;
  skinHelm?: string;
  skinHelm3D?: string;
  flags?: number;
}

export interface IOnlineModer extends IModifiedUser {
  online: IUserSession;
}

export interface IVSAPIError {
  error?: {
    message?: string;
    code?: number;
  };
}

export interface IPostArticle {
  id: number;
  from_id: number;
  owner_id: number;
  date: number;
  marked_as_ads: number;
  post_type: string;
  text: string;
  post_source: {
    type: string;
  };
  comments: {
    count: number;
    can_post: number;
  };
  likes: {
    count: number;
    user_likes: number;
    can_like: number;
    can_publish: number;
  };
  reposts: {
    count: number;
    user_reposted: number;
  };
  views: {
    count: number;
  };
}

export interface IPostsArticles {
  count: number;
  items: IPostArticle[];
}

export type StatusRow = {
  id: number;
  username: string;
  status_text: string;
};
