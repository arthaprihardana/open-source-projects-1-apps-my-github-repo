/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 15:53:53 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 23:14:49
 */
import { all, call, put, fork, takeEvery } from 'redux-saga/effects';
import { API_USER, ACCEPT_HEADER } from '../constants';
import { getUserLoginSuccess, getUserLoginFailure } from '../actions/login';
import { GET_USER_LOGIN } from '../actions/types';

const getLoginUserRequest = async params => {
    console.log('API_USER ==>', API_USER);
    console.log('accept', ACCEPT_HEADER);
    console.log('authorization', params);
    
    return await fetch(API_USER, {
            method: 'GET',
            headers: {
                'Accept': ACCEPT_HEADER,
                'Authorization': params
            },
        })
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => error);
}

function* getLoginUserFromServer({ payload }) {
    try {
        const response = yield call(getLoginUserRequest, payload);
        console.log('response ==>', response);
        yield put(getUserLoginSuccess(response));
    } catch (error) {
        yield put(getUserLoginFailure('Oops! something went wrong!'));
    }
}

export function* getLoginUserSaga() {
    yield takeEvery(GET_USER_LOGIN, getLoginUserFromServer);
}

export default function* rootSaga() {
    yield all([
        fork(getLoginUserSaga)
    ])
}