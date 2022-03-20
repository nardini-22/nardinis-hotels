import { IHotelsActionProps } from "typings/hotels";

const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const HotelsListFilterReducer = (
  state = DefaultState,
  action: IHotelsActionProps
) => {
  switch (action.type) {
    case "HOTELS_LIST_FILTER_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "HOTELS_LIST_FILTER_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error!",
      };
    case "HOTELS_LIST_FILTER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.result,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default HotelsListFilterReducer;
