/**
 * Created by mac on 2018/3/26.
 */
'use strict';
import {combineReducers} from "redux";
import loginIn from "./loginReducer";
import counter from "./counterReducer";


//将所有redux处理逻辑包装在一起
const rootReducer = combineReducers({
    loginIn: loginIn,
    counter: counter,
});


//导出，作为统一入口
export default rootReducer;