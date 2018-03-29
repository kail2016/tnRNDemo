/**
 * Created by mac on 2018/3/28.
 */
import * as types from "../contants/counterTypes";


/**
 * 同步Action
 * @returns {{type}}
 */
export function decrement() {

    return {
        type: types.DECREMENT,
    }
}

/**
 * 同步Action
 * @returns {{type}}：返回一个Action对象
 */
export function increment() {
    return {
        type: types.INCREMENT,
    }
}

/**
 *  异步Actinon
 * @returns {function(*, *)}
 */
export function addIfOdd() {
    return (dispatch, getState) => {
        const currentValue = getState();
        if (currentValue % 2 == 0) {
            return false;
        }
        dispatch(increment())
    }
}
/**
 * 异步Action
 * @param delay
 * @returns {function(*, *)} 返回一个函数；此时必须用thunk
 */
export function addAsy(delay = 2000) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(increment())
        }, delay)
    }
}
