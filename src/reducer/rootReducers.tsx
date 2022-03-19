import { combineReducers } from "redux";
import HotelsListReducer from "./hotelsListReducer";

const RootReducer = combineReducers({
  HotelsList: HotelsListReducer,
});

export default RootReducer;
