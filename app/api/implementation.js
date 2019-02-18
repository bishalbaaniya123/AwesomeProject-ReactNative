import api from './api';
import {getcheer, testData} from "./MockApiData/testData";
import {anup} from "./MockApiData/anupData";

export default class Implementation extends api {
    constructor(url){
        super();
        this.url = url;
    }

    customFetch(input, init = null) {
        return fetch(input, init).then((response) => {
            if (response.ok) {
                return response.json();
            } else throw response;
        });
    }

    testApi() {
        console.log("this is testApi", testData);
        return new Promise(resolve => resolve(getcheer));
    }
    anupApi() {
        console.log("this is testApi", testData);
        return new Promise(resolve => resolve(anup));
    }
    getCheers() {
        return fetch(this.url + "/api/cheers/sd", {
            method: 'GET',
        })
    }




}