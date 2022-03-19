const DefaultState = {
  loading: false,
  data: [],
  errrorMsg: "",
};

const HotelsListReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case "HOTEL_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "HOTEL_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error!",
      };
    case "HOTEL_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default HotelsListReducer;
