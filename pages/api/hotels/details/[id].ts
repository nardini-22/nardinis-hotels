import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req.query.id;
    const data = await axios.get(
      `https://cvcbackendhotel.herokuapp.com/hotels/${id}`
    );
    res.status(200).json({
      success: true,
      result: data.data,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
}
