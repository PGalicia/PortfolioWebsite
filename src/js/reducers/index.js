/*
    Imports
*/

import {
    CHANGE_GREETING
} from "../constants/action-types.js"; // Components

/*
    Initial State
    Additional Notes:
        - 'events' will contain the whole events object
*/
const initialState = {
    greeting: "Hello World"
};


/*
    Root Reducer
*/
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_GREETING:
            return { ...state, greeting: action.payload };
        default:
            return state;
    }
};

export default rootReducer;