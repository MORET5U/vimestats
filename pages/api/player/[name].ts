import axios from "axios";
import { steveSkinURI } from "libs/skinview-utils";
import { random } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";
import { processUser } from "utils/processing";
import { ValidUsernames } from "utils/regulars";
import { IError } from "vime-types/models/Errors";
import { IUser, IUserSession, IUserStatsRaw } from "vime-types/models/User";

const handler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  try {
    const name = query.name.toString();
    const { VIME_API_URI, VIME_API_KEY } = process.env;

    // In case of invalid username we throw 400 HTTP with JSON
    if (!ValidUsernames.test(name))
      return res.status(400).json({
        error: { message: "Invalid playername requested", code: 400 },
      });

    // Predefined headers object
    const headers = { "Access-Token": VIME_API_KEY };

    // Get user data and process it
    const user_data: IUser = await axios
      .get(`${VIME_API_URI}/user/name/${name}`, { headers })
      .then(({ data }) => data[0])
      .catch((e) => {
        throw e;
      });

    if (!user_data) {
      return res.status(404).json({ error: { message: "Player not found", code: 404 } });
    }
    const user = await processUser(user_data, { noGuild: true });

    // Obtain guild data object from raw data
    const guild = user_data.guild;

    // Get the skin data
    const rnd_num = random(10000, 100000, false);
    const skin = await axios
      .get(`https://skin.vimeworld.ru/game/v2/skin/${user.username}.png?_=${rnd_num}`, {
        responseType: "arraybuffer",
      })
      .then(({ data }) => Buffer.from(data, "binary").toString("base64"))
      .then((b64) => `data:image/png;base64,${b64}`)
      .catch(() => steveSkinURI);

    // Get cape data
    const cape = await axios
      .get(`https://skin.vimeworld.ru/game/v2/cape/${user.username}.png?_=${rnd_num}`, {
        responseType: "arraybuffer",
      })
      .then(({ data }) => Buffer.from(data, "binary").toString("base64"))
      .then((b64) => `data:image/png;base64,${b64}`)
      .catch(() => undefined);

    // Get session data
    const session: IUserSession = await axios
      .get(`${VIME_API_URI}/user/${user.id}/session`, { headers })
      .then(({ data }) => data.online)
      .catch((e) => {
        throw e;
      });

    // Get friends list
    const friends = await axios
      .get(`${VIME_API_URI}/user/${user.id}/friends`, { headers })
      .then((r) => r.data.friends)
      .then((data: IUser[]) => {
        return Promise.all(data.map((friend) => processUser(friend)));
      })
      .catch((e) => {
        throw e;
      });

    // Get stats of the player
    const stats = await axios
      .get(`${VIME_API_URI}/user/${user.id}/stats`, { headers })
      .then((r) => <IUserStatsRaw & IError>r.data)
      .then((data) => data.stats)
      .catch((e) => {
        throw e;
      });

    res.status(200).json({ user, guild, session, skin, cape, friends, stats });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
