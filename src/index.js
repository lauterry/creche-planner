import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import ChildPage from "./ChildPage";
import ChildrenListContainer from "./ChildrenListContainer";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
registerServiceWorker();
