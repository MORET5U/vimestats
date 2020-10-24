import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { search } = req.query;

    let posts;

    if (!search) {
      posts = await Axios.get(
        `https://api.vk.com/method/wall.get?owner_id=-170072131&count=100&access_token=${process.env.VK_API_KEY}&v=5.103`
      )
        .then((r) => r.data)
        .then((data) => data.response);
    } else {
      posts = await Axios.get(
        encodeURI(
          `https://api.vk.com/method/wall.search?owner_id=-170072131&owners_only=1&query="${search}"&access_token=${process.env.VK_API_KEY}&v=5.103`
        )
      )
        .then((r) => r.data)
        .then((data) => data.response);
    }

    res.status(200).json({ query: search, ...posts });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
