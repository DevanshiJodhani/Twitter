import { SET_USER } from "../Actions/ActionType";

const INITIAL_STATE = {
    user: null,
};

const UseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    };

};

export default UseReducer;