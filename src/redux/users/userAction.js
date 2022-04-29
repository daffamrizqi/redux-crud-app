import axios from 'axios'
import { userActionTypes } from './userTypes'
import API_URL from '../../constants/URL'

export const fetchUsersStart = () => ({
    type: userActionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = users => ({
    type: userActionTypes.FETCH_USERS_SUCCESS,
    payload: users
})

export const fetchUsersFailure = error => ({
    type: userActionTypes.FETCH_USERS_FAILURE,
    payload: error
})

// action for fetching data from API
export const fetchUsersAsync = () => {
    return dispatch => {
        dispatch(fetchUsersStart())
        axios.get(`${API_URL}user/get-users`)
            .then(response => dispatch(fetchUsersSuccess(response.data)))
            .catch(err => dispatch(fetchUsersFailure(err)))
    }
}