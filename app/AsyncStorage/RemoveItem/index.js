//get the value of a single item


import {AsyncStorage} from "react-native";

const _removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return {ok: true}
    } catch (error) {
        return {ok: false}
        // return error;
    }
};

export default _removeItem;