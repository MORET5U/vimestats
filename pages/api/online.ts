import axios from "axios";
import { IModifiedUser } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { processUser } from "utils/processing";
import { IUser } from "vime-types/models/User";

const handler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  try {
    const sort = query.sort.toString().toLowerCase() || "total";
    let resultingData: IModifiedUser[] | any;

    switch (sort) {
      case "staff":
        resultingData = await axios
          .get(`${process.env.VIME_API_URI}/online/staff`)
          .then((r) => r.data)
          .then((data: IUser[]) => Promise.all(data.map((user) => processUser(user))));
        break;
      default:
        resultingData = await axios
          .get(`${process.env.VIME_API_URI}/online`)
          .then(({ data }) => data)
          .catch((e) => {
            throw e;
          });
        break;
    }

    res.status(200).json(resultingData);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
