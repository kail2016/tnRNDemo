/**
 * Created by mac on 2018/3/26.
 */
'use strict';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/index";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initalState) {
    const store = createStoreWithMiddleware(rootReducer,initalState);
    return store
}