/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 13:35:14 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 14:01:16
 */
import {combineReducers} from 'redux';

import LoginReducer from './login';

export default combineReducers({
    LoginReducer: LoginReducer
});