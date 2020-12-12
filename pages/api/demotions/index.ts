import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  try {
    const search = query.search?.toString();

    let posts;
    if (!search) {
      posts = await Axios.get(
        `https://api.vk.com/method/wall.get?owner_id=-170072131&count=100&access_token=${process.env.VK_API_KEY}&v=5.103`
      )
        .then(({ data }) => data.response)
        .catch((e) => {
          throw e;
        });
    } else {
      posts = await Axios.get(
        encodeURI(
          `https://api.vk.com/method/wall.search?owner_id=-170072131&owners_only=1&query="${search}"&access_token=${process.env.VK_API_KEY}&v=5.103`
        )
      )
        .then(({ data }) => data.response)
        .catch((e) => {
          throw e;
        });
    }

    res.status(200).json({ query: search, ...posts });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
