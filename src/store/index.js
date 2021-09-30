import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "../store/reducers/homeReducer";
import { cardReducer } from "./reducers/card/cardReducer";
import { headerReducer } from "./reducers/header/headerReducer";
import { loginReducer } from "./reducers/login/loginReducer";
const combineReducer = combineReducers({
  home: homeReducer,
  card: cardReducer,
  header: headerReducer,
  login: loginReducer,
});

const store = createStore(combineReducer, applyMiddleware(thunk));

export default store;
