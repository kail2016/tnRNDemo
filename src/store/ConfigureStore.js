/**
 * Created by mac on 2018/3/26.
 */
'use strict';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import {createLogger} from 'redux-logger'; // 利用redux-logger打印日志
// import {apiMiddleware} from 'redux-api-middleware';

const logger = createLogger({collapsed: true});
const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);

export default function configureStore(initalState) {
    const store = createStoreWithMiddleware(rootReducer, initalState);
    return store
}