/*
    Imports
*/

// Constants
import {
    CHANGE_GREETING
} from "./../constants/action-types.js";

/*
    Actions
*/

export const changeGreeting = greeting => ({
    type: CHANGE_GREETING,
    payload: greeting
});