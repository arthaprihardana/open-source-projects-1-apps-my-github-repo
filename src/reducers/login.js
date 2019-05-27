/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 14:00:12 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 23:07:50
 */
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { POST_LOGIN, POST_LOGIN_SUCCESS, POST_LOGIN_FAILURE, GET_USER_LOGIN, GET_USER_LOGIN_SUCCESS, GET_USER_LOGIN_FAILURE } from "../actions/types";

const INIT_STATE = {
    loading: false,
    credential: null,
    login: null
}

const persistConfig = {
    key: 'LoginReducer',
    storage: AsyncStorage,
    whitelist: ['credential', 'login']
};

export default persistReducer(persistConfig, (state = INIT_STATE, action) => {
    switch (action.type) {
        case POST_LOGIN:
            return { ...state, credential: action.payload }
        case GET_USER_LOGIN:
            return { ...state, loading: true }
        case GET_USER_LOGIN_SUCCESS:
            return { ...state, loading: false, login: action.payload }
        case GET_USER_LOGIN_FAILURE:
            return { ...state, loading: false, login: null }
        default:
            return { ...state }
    }
})