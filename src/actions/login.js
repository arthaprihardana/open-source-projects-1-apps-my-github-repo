/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 13:58:04 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 23:10:36
 */
import { POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE, GET_USER_LOGIN, GET_USER_LOGIN_SUCCESS, GET_USER_LOGIN_FAILURE } from "./types";

export const postLogin = params => ({
    type: POST_LOGIN,
    payload: params
});

export const getUserLogin = params => ({
    type: GET_USER_LOGIN,
    payload: params
});

export const getUserLoginSuccess = response => ({
    type: GET_USER_LOGIN_SUCCESS,
    payload: response
});

export const getUserLoginFailure = error => ({
    type: GET_USER_LOGIN_FAILURE,
    payload: error
});