//get keys in an array form of every single item stored in local storage

import {AsyncStorage} from "react-native";

const _getAllKeys = async () => {
    try {
        return await AsyncStorage.getAllKeys();
    } catch (error) {
        // Error retrieving data
        return error;
    }
};

export default _getAllKeys;