import { combineReducers } from "@reduxjs/toolkit";
import imageReducer from "./image/reducer";


const rootReducer = combineReducers({
    images:imageReducer
});

export default rootReducer;