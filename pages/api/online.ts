import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Processors } from "utils/processing";
import { IUser } from "vime-types/models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { sort } = req.query;
    sort = sort || "total";

    let resultingData = {};
    switch (sort.toString().toLowerCase()) {
      case "total":
        resultingData = await Axios.get(`${process.env.VIME_API_URI}/online`)
          .then((r) => r.data)
          .then((receivedData) => receivedData);
        break;

      case "staff":
        resultingData = await Axios.get(`${process.env.VIME_API_URI}/online/staff`)
          .then((r) => r.data)
          .then((receivedData) => {
            receivedData.map(async (moderator: IUser) => await Processors.player(moderator));
            return receivedData;
          });
        break;

      default:
        break;
    }

    res.status(200).json(resultingData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
