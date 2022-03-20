import axios from "axios";
import { Dispatch } from "redux";
import { IHotelsDispatchProps, IHotelsParams } from "typings/hotels";

export const GetHotelsList =
  (id: number) => async (dispatch: Dispatch<IHotelsDispatchProps>) => {
    try {
      dispatch({ type: "HOTELS_LIST_LOADING" });
      const res = await axios.get(`api/hotels/list/${id}`);
      dispatch({
        type: "HOTELS_LIST_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: "HOTELS_LIST_FAIL" });
    }
  };

export const GetHotelsListFilter =
  ({ id, adult, child }: IHotelsParams) =>
  async (dispatch: Dispatch<IHotelsDispatchProps>) => {
    try {
      dispatch({ type: "HOTELS_LIST_FILTER_LOADING" });
      const res = await axios.get(
        `api/hotels/list/filter/${id}/${adult}/${child}`
      );
      dispatch({
        type: "HOTELS_LIST_FILTER_SUCCESS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: "HOTELS_LIST_FILTER_FAIL" });
    }
  };

export const GetHotelsDetails =
  (id?: number | string | string[]) =>
  async (dispatch: Dispatch<IHotelsDispatchProps>) => {
    try {
      dispatch({ type: "HOTELS_DETAILS_LOADING" });
      const res = await axios.get(`api/hotels/details/${id}`);
      dispatch({ type: "HOTELS_DETAILS_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "HOTELS_DETAILS_FAIL" });
    }
  };
