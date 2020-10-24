import { IGuildSimple } from "vime-types/models/Guild";
import { IUserStatsGroup } from "vime-types/models/Stats";
import { IUser, IUserMatch, IUserSession } from "vime-types/models/User";

export type UserData = {
  user?: IModifiedUser;
  guild?: IGuildSimple;
  session?: IUserSession;
  matches?: IUserMatch[];
  friends?: IModifiedUser[];
  stats?: IUserStatsGroup;
};

export interface IFlags {
  raw: number;
  processed: IFlagsBooleans | {};
}

export interface IFlagsBooleans {
  isDeveloper?: boolean;
  isVimeAdmin?: boolean;
  isProjectSupporter?: boolean;
  isContributor?: boolean;
  isGoodModerator?: boolean;
  isBanHammer3000?: boolean;
}

export interface IModifiedUser extends IUser {
  humanizedRank: string;
  rankColor: string;
  playedHours: number;
  playedMinutes: number;
  skinHelm: string;
  flags: IFlags;
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
