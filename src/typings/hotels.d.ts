export interface IHotelsListProps {
  id: number;
  name: string;
  cityCode: number;
  cityName: string;
  rooms: IRoomsDetailsProps;
}

export interface IRoomsDetailsProps {
  roomID: number;
  categoryName: string;
  price: IPriceProps;
}

export interface IPriceProps {
  adult: string;
  child: string;
}
