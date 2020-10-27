import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Processors } from "utils/processing";
import { IUser } from "vime-types/models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { sort } = req.query;
    sort = sort.toString().toLowerCase() || "total";

    let resultingData;

    if (sort === "total") {
      let apiReq = await Axios.get(`${process.env.VIME_API_URI}/online`);

      resultingData = await apiReq.data;
    } else if (sort === "staff") {
      let apiReq = await Axios.get(`${process.env.VIME_API_URI}/online/staff`);
      let apiData: IUser[] = await apiReq.data;

      resultingData = await Promise.all(apiData.map(async (u) => await Processors.user(u)));
    }

    res.status(200).json(resultingData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
