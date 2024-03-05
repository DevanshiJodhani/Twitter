import { combineReducers } from "redux";
import UseReducer from "./UseReducer";
import ArticleReducers from "./ArticleReducers";

const rootReducer = combineReducers({
    userState: UseReducer,
    articleState: ArticleReducers,
});

export default rootReducer;