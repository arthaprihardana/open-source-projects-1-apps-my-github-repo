/**
 * @author: Artha Prihardana 
 * @Date: 2019-05-27 13:33:40 
 * @Last Modified by: Artha Prihardana
 * @Last Modified time: 2019-05-27 16:03:04
 */
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from "redux-saga";
import { persistStore } from 'redux-persist';
import reducers from '../reducers';
import RootSaga from '../middlewares';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default configureStore = () => {
    const store = createStore(
        reducers, 
        composeEnhancer(applyMiddleware(...middlewares))
    );
    let persistor = persistStore(store);

    sagaMiddleware.run(RootSaga);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }
    
    // return store;
    return { store, persistor };
}