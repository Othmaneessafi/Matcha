import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import infosReducer from "./infosReducer";
import alertReducer from "./alertReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import userReducer from './userReducer';
import resetPasswordReducer from "./resetPReducer";


const combinedReducer = (history)=> combineReducers({
    router : connectRouter(history),
    register : registerReducer,
    login: loginReducer,
    user : userReducer,
    infos: infosReducer,
    resetPassword: resetPasswordReducer,
    alert: alertReducer,
    form
});
export default combinedReducer;