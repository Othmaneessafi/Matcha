import { put, takeLatest, call } from "redux-saga/effects";
import {push} from "react-router-redux";
import { select } from "redux-saga/effects";
import { request } from "./helper";
import socket from '../socketConn';
import {
  getUsersSuccess,
  getUsersError,
  deleteUser,
  getBlockUserSuccess,
  deleteBlock,
  getLikeUserSuccess,
  deleteLike,
  getViewProfileListSuccess,
  getLikedBySuccess,
} from "../actions/userAction";

export const getUsers = function* getUsers(data) {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/getUsers",
        data: { id: user.id, filtre: data.filtre, indice: data.index },
        method: "post",
      },
      token
    );
    if (response) {
      var oldUsers = yield select((state) => state.users.users);
      var newUsers = response.data;
      var usrs = null;
      if (data.index !== 0) usrs = oldUsers.concat(newUsers);
      else usrs = newUsers;
      yield put(getUsersSuccess(usrs));
    } else yield put(getUsersError("error"));
  } catch (error) {
    yield put(getUsersError("something wrong happened"));
  }
};
export const sortUsers = function* sortUsers({ methode, route, index }) {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/sortUsers",
        data: { id: user.id, methode: methode, route: route, indice: index },
        method: "post",
      },
      token
    );
    if (response) {
      var oldUsers = yield select((state) => state.users.users);
      var newUsers = response.data;
      var us = null;
      if (index !== 0) us = oldUsers.concat(newUsers);
      else us = newUsers;
      yield put(getUsersSuccess(us));
    } else yield put(getUsersError("error"));
  } catch (error) {
    yield put(getUsersError("something wrong happened"));
  }
};
export const blockUser = function* blockUser({ blocked_user_id }) {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/blockUser",
        data: { id: user.id, blocked_user_id: blocked_user_id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(deleteUser(blocked_user_id));
    }
  } catch (error) {
    console.log(error);
  }
};
export const deblockUser = function* deblockUser({ deblocked_user_id }) {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/deblockUser",
        data: { id: user.id, deblocked_user_id: deblocked_user_id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(deleteBlock(deblocked_user_id));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getBlockUser = function* getBlockUser() {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/getBlockUser",
        data: { id: user.id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(getBlockUserSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};
export const likeUser = function* likeUser({ liked_user_id }) {
  try {    
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/likeUser",
        data: {
          username: user.username,
          id: user.id,
          liked_user_id: liked_user_id,
        },
        method: "post",
      },
      token
    );
    if (response) {
      const by = {
        id: user.id,
        username: user.username,
        profilePic: user.profilePic,
      };
      socket.emit('userLiked', {by: by, receiver: parseInt(liked_user_id), content: `${user.username} liked you`});
      yield put(deleteUser(liked_user_id));
    }
  } catch (error) {}
};
export const dislikeUser = function* dislikeUser({ dislike_user_id }) {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/dislikeUser",
        data: {
          username: user.username,
          id: user.id,
          dislike_user_id: dislike_user_id,
        },
        method: "post",
      },
      token
    );
    if (response) {
      const by = {
        id: user.id,
        username: user.username,
        profilePic: user.profilePic,
      };
      socket.emit('userUnliked', {by: by, receiver: parseInt(dislike_user_id), content: `${user.username} unliked you`});
      yield put(deleteLike(dislike_user_id));
    }
  } catch (error) {}
};
export const getLikeUser = function* getLikeUser() {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/getLikeUser",
        data: { id: user.id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(getLikeUserSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};
export const reportUser = function* reportUser({ reported_user_id }) {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/reportUser",
        data: { id: user.id, reported_user_id: reported_user_id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(deleteUser(reported_user_id));
    }
  } catch (error) {
    console.log(error);
  }
};

export const viewProfileUser = function* viewProfileUser({ viewed_user_id }) {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/viewProfileUser",
        data: {
          username: user.username,
          id: user.id,
          viewed_user_id: viewed_user_id,
        },
        method: "post",
      },
      token
    );
    if (response) {
      const by = {
        id: user.id,
        username: user.username,
        profilePic: user.profilePic,
      };
      socket.emit('profileViewed', {by: by, receiver: parseInt(viewed_user_id), content: `${user.username} viewed your profile`});
    }
  } catch (error) {
    console.log(error);
  }
};

export const getViewProfileList = function* getViewProfileList() {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/getViewProfileList",
        data: { id: user.id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(getViewProfileListSuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getLikedBy = function* getLikedBy() {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/getLikedByList",
        data: { id: user.id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(getLikedBySuccess(response.data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const resetSteps = function* resetSteps() {
  try {
    const user = yield select((state) => state.user);
    const token = yield select((state) => state.user.token);
    const response = yield call(
      request,
      {
        url: "http://localhost:3001/resetStep",
        data: { id: user.id },
        method: "post",
      },
      token
    );
    if (response) {
      yield put(push("/infos"));
    }
  } catch (error) {
    console.log(error);
  }
};


export default function* users() {
  yield takeLatest("GET_USERS", getUsers);
  yield takeLatest("BLOCK_USER", blockUser);
  yield takeLatest("DEBLOCK_USER", deblockUser);
  yield takeLatest("GET_BLOCK_USER", getBlockUser);
  yield takeLatest("LIKE_USER", likeUser);
  yield takeLatest("DISLIKE_USER", dislikeUser);
  yield takeLatest("DISLIKE_USER_ACT", dislikeUser);
  yield takeLatest("GET_LIKE_USER", getLikeUser);
  yield takeLatest("REPORT_USER", reportUser);
  yield takeLatest("VIEW_PROFILE_USER", viewProfileUser);
  yield takeLatest("SORT_USERS", sortUsers);
  yield takeLatest("GET_VP_LIST", getViewProfileList);
  yield takeLatest("GET_LIKED_BY", getLikedBy);
  yield takeLatest("RESET_STEP", resetSteps);
}
