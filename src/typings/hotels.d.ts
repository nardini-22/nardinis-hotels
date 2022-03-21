export interface IHotelsListProps {
  id: number;
  name: string;
  cityCode: number;
  cityName: string;
  rooms: IRoomProps[];
}

export interface IRoomProps {
  roomID: number;
  categoryName: string;
  price: IPriceProps;
}

export interface IPriceProps {
  adult: string;
  child: string;
}

export interface IIDProps {
  id: number | string;
}

export interface IHotelsListReducer {
  HotelsList: {
    data: IHotelsListProps[];
    errorMsg: string;
    loading: boolean;
  };
}

export interface IHotelsDetailsReducer {
  HotelsDetails: {
    data: IHotelsListProps[];
    errorMsg: string;
    loading: boolean;
  };
}

export interface IHotelsListFilterReducer {
  HotelsListFilter: {
    data: IHotelsListProps[];
    errorMsg: string;
    loading: boolean;
  };
}

export interface IHotelsActionProps {
  type: string;
  payload: {
    success: boolean;
    result: IHotelsListProps[];
  };
}

export interface IHotelsDispatchProps {
  type: string;
  payload?: {
    success: boolean;
    result: IHotelsListProps[];
  };
}

export interface IHotelsParams {
  id: number;
  adult: number;
  child: number;
}
