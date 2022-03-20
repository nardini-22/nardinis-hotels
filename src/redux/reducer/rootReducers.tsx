import { combineReducers } from "redux";
import HotelsDetailsReducer from "./hotelsDetailsReducer";
import HotelsListFilterReducer from "./hotelsListFilterReducer";
import HotelsListReducer from "./hotelsListReducer";

const RootReducer = combineReducers({
  HotelsList: HotelsListReducer,
  HotelsDetails: HotelsDetailsReducer,
  HotelsListFilter: HotelsListFilterReducer
});

export default RootReducer;
