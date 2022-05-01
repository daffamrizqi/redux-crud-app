import {
    combineReducers
} from "redux";
import userReducer from "../users/userReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    users: userReducer,
    form: formReducer
}); 