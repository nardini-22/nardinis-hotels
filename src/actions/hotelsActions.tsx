import axios from "axios";

export const GetHotelsList = (id: number) => async (dispatch: any) => {
  try {
    dispatch({ type: "HOTELS_LIST_LOADING" });
    const res = await axios.get(`api/hotels/list/${id}`);
    dispatch({ type: "HOTELS_LIST_SUCCESS", payload: res.data});
  } catch (err) {
    dispatch({ type: "HOTELS_LIST_FAIL" });
  }
};

export const GetHotelsDetails = (id: number) => async (dispatch: any) => {
  try {
    dispatch({ type: "HOTELS_DETAILS_LOADING" });
    const res = await axios.get(`api/hotels/details/${id}`);
    dispatch({ type: "HOTELS_DETAILS_SUCCESS", payload: res.data});
  } catch (err) {
    dispatch({ type: "HOTELS_DETAILS_FAIL" });
  }
};

