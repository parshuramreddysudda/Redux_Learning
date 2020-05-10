import { combineReducers } from "redux";
import usersReducer from './Users/Services/users.reducers'

export default combineReducers({
   users:usersReducer
});