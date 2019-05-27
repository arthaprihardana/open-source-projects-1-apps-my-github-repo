/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 13:36:15 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 16:03:59
 */
import { all } from 'redux-saga/effects';

import Login from './login';

export default function* rootSaga() {
    yield all([
        Login()
    ])
}