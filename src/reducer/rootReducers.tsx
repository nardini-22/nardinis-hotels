import { combineReducers } from "redux";
import HotelsDetailsReducer from "./hotelsDetailsReducer";
import HotelsListReducer from "./hotelsListReducer";

const RootReducer = combineReducers({
  HotelsList: HotelsListReducer,
  HotelsDetails: HotelsDetailsReducer,
});

export default RootReducer;
