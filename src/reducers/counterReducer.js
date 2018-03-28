/**
 * Created by mac on 2018/3/28.
 */
import * as types from "../contants/counterTypes";

const initialState = {
    count: 0,
}

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
}
