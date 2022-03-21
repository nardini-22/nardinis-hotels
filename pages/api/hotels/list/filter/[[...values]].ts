import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IHotelsListProps, IRoomProps } from "typings/hotels";

// values[0] = ID_da_Cidade
// values[1] = Valor máximo por adulto
// values[2] = Valor máximo por criança

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { values } = req.query;
    console.log(values);
    const valueAdult =
      values[1] === "0" || values[1] === undefined ? 99999999 : values[1];
    const valueChild =
      values[2] === "0" || values[2] === undefined ? 99999999 : values[2];

    const data = await axios.get(
      `https://cvcbackendhotel.herokuapp.com/hotels/avail/${values[0]}`
    );

    const filter = data.data.filter((hotel: IHotelsListProps) => {
      const result = hotel.rooms.map((room: IRoomProps) => {
        return room.price.adult < valueAdult && room.price.child < valueChild
          ? room
          : false;
      });
      return !!result[0];
    });

    const filteredData = filter.map((hotel: IHotelsListProps) => {
      const rooms = hotel.rooms.map((room: IRoomProps) => {
        if (room.price.adult < valueAdult && room.price.child < valueChild) {
          return room;
        }
      });
      const result = { ...hotel, rooms: [...rooms] };

      return result;
    });

    res.status(200).json({
      success: true,
      result: filteredData,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
}
