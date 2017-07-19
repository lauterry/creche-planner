import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import store from "./store";
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
registerServiceWorker();
