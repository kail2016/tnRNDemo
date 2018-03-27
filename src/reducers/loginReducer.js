/**
 * Created by mac on 2018/3/26.
 */
'use strict';

import * as types from "../contants/loginTypes";

const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: null,
};


export default function loginIn(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            return {
                ...state,
                status: '正在登录',
                isSuccess: false,
                user: action.user,
            };
            break;
        case types.LOGIN_IN_DONE:
            return {
                ...state,
                status: '登录成功',
                isSuccess: true,
                user: action.user,
            };
            break;
        case types.LOGIN_IN_ERROR:
            return {
                ...state,
                status: '登录失败',
                isSuccess: false,
                user: null,
            };
            break;
        default:
            return state;
    }
}

