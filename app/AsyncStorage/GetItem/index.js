//get the value of a single item


import {AsyncStorage} from "react-native";

const _retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        } else {
            return null;
        }
    } catch (error) {
        return error;
    }
};

export default _retrieveData;