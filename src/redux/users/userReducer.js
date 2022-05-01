import { userActionTypes } from './userTypes'

const INIT_STATE = {
    users: [],
    userDetail: [],
    newUser: [],
    editedUser: [],
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
        case userActionTypes.FETCH_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload
            }
        case userActionTypes.CREATE_NEW_USER:
            return {
                ...state,
                newUser: action.payload
            }
        case userActionTypes.CREATE_NEW_USER_FAILURE:
            return {
                ...state,
                errorMsg: action.payload
            }
        case userActionTypes.EDIT_USER:
            return {
                ...state,
                editedUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer