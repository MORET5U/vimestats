import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiReq = await Axios.get(
      `${process.env.VIME_API_URI}/user/name/defracted`,
      { headers: { "Access-Token": process.env.VIME_API_KEY } }
    );

    const data = await apiReq.data;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
