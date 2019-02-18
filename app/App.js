import React, {Component} from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "./redux-stuffs/store/store";
import {PersistGate} from "redux-persist/lib/integration/react";

import RootStack from "./config/routes";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RootStack/>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
