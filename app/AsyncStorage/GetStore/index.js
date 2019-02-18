//get every single key-value pair from AsyncStorage

import _multiGet from '../MultiGet';
import _allKeys from '../GetAllKeys';

let finalResult = {};

const _getStore = async () => {
    let allKeys = await _allKeys();
    let allStore = await _multiGet(allKeys);

    allStore.map((item) => {
        finalResult[item[0]] = JSON.parse(item[1]);
    });

    return finalResult;
};

export default _getStore;