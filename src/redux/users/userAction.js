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

export const fetchUserDetail = (user) => ({
    type: userActionTypes.FETCH_USER_DETAIL,
    payload: user
})

export const createNewuser = (newUser) => ({
    type: userActionTypes.CREATE_NEW_USER,
    payload: newUser
})

export const createNewUserFailure = error => ({
    type: userActionTypes.CREATE_NEW_USER_FAILURE,
    payload: error
})

export const editUser = (editedUser) => ({
    type: userActionTypes.EDIT_USER,
    payload: editedUser
})

// action for fetching data from API

// get all users list
export const fetchUsersAsync = (dispatch) => {
    axios.get(`${API_URL}user/get-users`)
        .then(response => dispatch(fetchUsersSuccess(response.data)))
        .catch(err => dispatch(fetchUsersFailure(err)))
}

// get user detail using id 
export const fetchUserDetailAsync = (dispatch, id) => {
    axios.get(`${API_URL}user/get-user-byId/${id}`)
        .then(response => dispatch(fetchUserDetail(response.data)))
        .catch(err => console.log(err))
}

// create user action
export const createUser = (dispatch, postData) => {
    axios.post(`${API_URL}user/add-user`, postData)
        .then((response) => dispatch(createNewuser(response.data.newUser)))
        .catch((err) => console.log(err))
}

export const editUserAsync = (dispatch, editedData, id) => {
    axios.patch(`${API_URL}user/edit-user/${id}`, editedData)
        .then((response) => dispatch(editUser(response.data)))
        .catch(error => console.log(error))
}