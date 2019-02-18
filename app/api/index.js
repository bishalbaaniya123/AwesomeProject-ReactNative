import env from "./config";
import {envType} from "./config";
import MockApi from "./MockApi";
import Implementation from "./implementation";

let api;

switch (env) {
    case envType.LOCAL:
        api = new Implementation('https://api.yesfifa.offlinepass.com');
        break;
    case envType.DEV:
        api = new Implementation('http://ec2-34-207-220-193.compute-1.amazonaws.com:8080');
        break;
    case envType.PROD:
        api = new Implementation('http://example.com/api');
        break;
    case envType.MOCK:
    default:
        api = new MockApi();
}

export default api;