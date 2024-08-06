import { ActionTypes } from "../constans/action-types";

export const getRoommates = () => {
    return {
        type: ActionTypes.GET_ROOMMATE
    }
}

export const setRoommates = (roommates) =>{
    return {
        type: ActionTypes.SET_ROOMMATE,
        payload: roommates
    }
}
