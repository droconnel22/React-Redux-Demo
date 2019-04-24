import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from "./components/App";

import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
const store = configureStore();


function Hi() {
    return <p>Hi.</p>
}

render(
<Provider store={store}>    
<Router>
    <App/> 
</Router>
</Provider>,
document.getElementById("app")
);