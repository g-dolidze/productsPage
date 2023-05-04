import { combineReducers } from "redux";
import mainReducer from "../pages/Home/redux/reducer";

const reducer = combineReducers({ mainReducer });
export default reducer;
