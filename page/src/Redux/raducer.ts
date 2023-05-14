import { combineReducers } from "redux";
import mainReducer from "../pages/Home/redux/reducer";
import categoryReducer from "../pages/Category/redux/reduccer";

const reducer = combineReducers({ mainReducer, categoryReducer });
export default reducer;
