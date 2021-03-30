import { connectRouter } from "connected-react-router";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";
import infosReducer from "./infosReducer";
import usersReducer from "./usersReducer";
import alertReducer from "./alertReducer";
import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import userReducer from './userReducer';
import resetPasswordReducer from "./resetPReducer";
import imagesReducer from "./imagesReducers";
import chat from './chatReducer';
import notif from './notifReducer';
import viewProfileList from './viewProfileList';
import blockList from './blockList';
import likeList from './likeList';
import likedByList from './likedByList';

const combinedReducer = (history)=> combineReducers({
    router : connectRouter(history),
    register : registerReducer,
    login: loginReducer,
    user : userReducer,
    infos: infosReducer,
    resetPassword: resetPasswordReducer,
    alert: alertReducer,
    chat: chat,
    users: usersReducer,
    images: imagesReducer,
    notif: notif,
    blockList : blockList,
    likeList : likeList,
    likedByList: likedByList,
    viewProfileList: viewProfileList,

    form
});
export default combinedReducer;