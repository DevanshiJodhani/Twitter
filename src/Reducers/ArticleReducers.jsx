import { GET_ARTICLES } from "../Actions/ActionType";

export const initState = {
    articles: [],
};

const ArticleReducers = (state = initState, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
            };
        default:
            return state;
    }
};


export default ArticleReducers;
