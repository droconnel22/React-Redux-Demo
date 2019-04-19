import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from "./components/App";

import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
const store = configureStore();


function Hi() {
    return <p>Hi.</p>
}

render(
<ReduxProvider store={store}>    
<Router>
    <App/> 
</Router>
</ReduxProvider>,
document.getElementById("app")
);