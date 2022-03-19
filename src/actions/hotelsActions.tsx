import api from "services/api";

export const GetHotelsList = (id: number) => async (dispatch: any) => {
  try {
    const res = await api.get(`/list/${id}`);
    dispatch({ type: "HOTELS_LIST_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "HOTELS_LIST_FAIL" });
  }
};
