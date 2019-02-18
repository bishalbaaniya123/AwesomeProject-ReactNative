//get values of multiple items, needs an array as parameter

import {AsyncStorage} from "react-native";

const _multiGet = async (keys) => {
    try {
        const value = await AsyncStorage.multiGet(keys);
        if (value !== null) {
            return value;
        } else {
            return null;
        }
    } catch (error) {
        return {status: -1};
    }
};

export default _multiGet;