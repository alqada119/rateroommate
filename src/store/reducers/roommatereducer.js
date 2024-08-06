import { ActionTypes } from "../constans/action-types"

const initialState = {
    Roommates: []
}
export const roommatereducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch (type) {
        case ActionTypes.GET_ROOMMATE:
            return state
        case ActionTypes.SET_ROOMMATE:
            return {
                ...state,
                Roommates: payload
            }
        default:
            return state
    }
}