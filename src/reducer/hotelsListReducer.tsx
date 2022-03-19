const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const HotelsListReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case "HOTELS_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "HOTELS_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error!",
      };
    case "HOTELS_LIST_SUCCESS":
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

export default HotelsListReducer;
