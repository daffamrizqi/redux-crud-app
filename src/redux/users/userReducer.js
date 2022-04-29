import { userActionTypes } from './userTypes'

const INIT_STATE = {
    users: [],
    isFetching: false,
    errorMsg: undefined
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS_START:
            return {
                ...state,
                isFetching: true
            };
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFetching: false
            };
        case userActionTypes.FETCH_USERS_FAILURE:
            return {
                ...state,
                errorMsg: action.payload
            }
        default:
            return state
    }
}

export default userReducer