import { combineReducers } from "redux";

import user from "./userReducer";
import tweets from './tweetReducer';

export default combineReducers(
    {
        user,
        tweets
    }
)