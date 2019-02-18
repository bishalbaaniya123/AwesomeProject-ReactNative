//send (key,value) as parameter to store data in local storage

import {AsyncStorage} from "react-native";

const _storeData = async (key, val) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(val));
        return ({status: 1});
    } catch (error) {
        // Error saving data
        return ({status: -1});
    }
};

export default _storeData;