import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IUser, IUserFriendsRaw, IUserSessionRaw, IUserStatsRaw } from "vime-types/models/User";
import { IError } from "vime-types/models/Errors";
import Validator from "../../../utils/validation";
import { Processors } from "utils/processing";
import { IModifiedUser, UserData } from "interfaces";
import { v4 as uuid } from "uuid";
import { steveSkinURI } from "libs/skinview-utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      query: { name },
    } = req;

    // We should test the username first
    const isUsernameValid = Validator.validateUsername(<string>name);

    // In case of invalid username we throw 400 HTTP with JSON
    if (!isUsernameValid) {
      res.status(400).json({
        error: { message: "Invalid playername requested", code: 400 },
      });

      return;
    }

    // If validation was successful we proceed to fetching user data
    const user = await Axios.get(`${process.env.VIME_API_URI}/user/name/${name}`, {
      headers: { "Access-Token": process.env.VIME_API_KEY },
    })
      .then((fres) => fres.data)
      .then((data: IUser[]) => data[0])
      .catch((error: Error) => {
        throw error;
      });

    // If there's no player with such username we return 404 HTTP with JSON
    if (!user) {
      res.status(404).json({ error: { message: "Player not found", code: 404 } });
      return;
    }

    // We process the data
    const processedUser = await Processors.user(user, { noGuild: true });

    // We should get user's skin and cape as well as other data and include data URI
    const skinDataURI = await Axios.get(`http://skin.vimeworld.ru/game/v2/skin/${user.username}.png?_=${uuid()}`, {
      responseType: "arraybuffer",
    })
      .then((res) => Buffer.from(res.data, "binary").toString("base64"))
      .then((b64) => `data:image/png;base64,${b64}`)
      .catch((_e: any) => steveSkinURI);

    // We should get user's skin as well as other data and include data URI
    const capeDataURI = await Axios.get(`https://skin.vimeworld.ru/game/v2/cape/${user.username}.png?_=${uuid()}`, {
      responseType: "arraybuffer",
    })
      .then((res) => Buffer.from(res.data, "binary").toString("base64"))
      .then((b64) => `data:image/png;base64,${b64}`)
      .catch((_e: any) => undefined);

    // Separate guild object from user data
    const guild = user.guild;

    // Proceed to gettting session data
    const session = await Axios.get(`${process.env.VIME_API_URI}/user/${user.id}/session`, {
      headers: { "Access-Token": process.env.VIME_API_KEY },
    })
      .then((res) => res.data)
      .then((data: IUserSessionRaw) => data.online)
      .catch((err: Error) => {
        throw err;
      });

    // Getting friends data
    let friends: IUser[] | null = await Axios.get(`${process.env.VIME_API_URI}/user/${user.id}/friends`, {
      headers: { "Access-Token": process.env.VIME_API_KEY },
    })
      .then((res) => res.data)
      .then((data: IUserFriendsRaw) => data.friends)
      .catch((err: Error) => {
        throw err;
      });

    let friendsProcessed: IModifiedUser[] | null = [];
    if (friends.length > 0) {
      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        friendsProcessed[i] = await Processors.user(friend);
      }
    } else {
      friendsProcessed = null;
    }

    // Time to get stats
    const stats = await Axios.get(`${process.env.VIME_API_URI}/user/${user.id}/stats`, {
      headers: { "Access-Token": process.env.VIME_API_KEY },
    })
      .then((res) => res.data)
      .then((data: IUserStatsRaw & IError) => data.stats)
      .catch((err: Error) => {
        throw err;
      });

    const resultingData: UserData = {
      user: processedUser,
      guild: guild,
      session: session,
      friends: friendsProcessed,
      stats: stats,
      skin: skinDataURI,
      cape: capeDataURI,
    };

    res.status(200).json(resultingData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
