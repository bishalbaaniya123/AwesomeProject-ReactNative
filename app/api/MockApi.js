import Api from "./api";

import {testData, getcheer} from "./MockApiData/testData";
import {anup} from "./MockApiData/anupData";


export default class MockApi extends Api {

    testApi() {
        console.log("this is testApi", testData);
        return new Promise(resolve => resolve(getcheer));
    }
    anupApi() {
        console.log("this is testApi", testData);
        return new Promise(resolve => resolve(anup));
    }
}





