/**
 * Created by mac on 2018/3/26.
 */
'use strict';

import * as types from "../contants/loginTypes";

//模拟用户信息
let user = {
    name:'zhouhui',
    age:24
};


//登录请求
export function login() {
    return dispatch => {
        dispatch(isLogining());

        let result = fetch('http://www.baidu.com')
            .then((res)=>{
                dispatch(loginSuccess(user))
            }).catch((e)=>{
                dispatch(loginError())
            })
    }
}


function isLogining() {
    return {
        type : types.LOGIN_IN_DOING
    }
}

function loginSuccess(user) {
    return {
        type: types.LOGIN_IN_DONE,
        user:user
    }
}

function loginError() {
    return{
        type : types.LOGIN_IN_ERROR
    }

}



