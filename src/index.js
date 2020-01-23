import React from "react";
import {createStore} from "redux";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import reducers from "./reducers";
import Routing from "./Routing";
import "./index.css";



const store = createStore(reducers);

const Entry = () => {
    return <Routing/>
};

ReactDOM.render(
    <Provider store={store}>
        <Entry/>
    </Provider>,
    document.getElementById("root")
);

