const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const HotelsDetailsReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case "HOTELS_DETAILS_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "HOTELS_DETAILS_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error!",
      };
    case "HOTELS_DETAILS_SUCCESS":
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

export default HotelsDetailsReducer;
