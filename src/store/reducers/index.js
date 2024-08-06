import { combineReducers } from "redux";
import { roommatereducer } from "./roommatereducer";

export const reducers = combineReducers({
    allRoommates: roommatereducer
})