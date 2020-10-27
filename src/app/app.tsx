import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import Main from "./main";
import configureStore from './configureStore'
const history = createBrowserHistory()
//import 'react-reflex/styles.css';
import '../assets/styles/react-reflex.css';
import '../assets/styles/main.scss';


const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)


ReactDOM.render(
<Main store={store} history={history} />,
  document.getElementById("root")
);