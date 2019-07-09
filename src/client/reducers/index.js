import { combineReducers } from "redux";
import users from "./usersReducer";
import auth from "./authReducer";
import admins from "./adminsReducer";

export default combineReducers({
  users,
  auth,
  admins
});
