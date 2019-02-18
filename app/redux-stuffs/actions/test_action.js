import {TEST_ACTION} from "../constant/index";

export const testAction = (test) => {
    console.warn("FROM ACTION......", test);
    return {
        type: TEST_ACTION,
        payload: test
    };
};
