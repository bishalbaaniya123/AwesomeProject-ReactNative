import {TEST_ACTION} from "../constant/index";

export const testReducer = (state= null, action)=>{
    switch(action.type){
        case TEST_ACTION:
            console.warn("FROM REDUCER......", action);
            return {...state, testKey: action.payload};
        default:
            return state;
    }
};