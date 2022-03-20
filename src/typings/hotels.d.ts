export interface IHotelsListProps {
  id: number;
  name: string;
  cityCode: number;
  cityName: string;
  rooms: {
    roomID: number;
    categoryName: string;
    price: IPriceProps;
  };
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
    data: Array<IHotelsListProps>;
    errorMsg: string;
    loading: boolean;
  };
}

export interface IHotelsDetailsReducer {
  HotelsDetails: {
    data: Array<IHotelsListProps>;
    errorMsg: string;
    loading: boolean;
  };
}

export interface IHotelsActionProps {
  type: string;
  payload: {
    success: boolean;
    result: Array<IHotelsListProps>;
  };
}

export interface IHotelsDispatchProps {
  type: string;
  payload?: {
    success: boolean;
    result: Array<IHotelsListProps>;
  };
}

