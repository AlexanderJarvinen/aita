import * as React from 'react';
import { History } from "history";
import { Store } from "redux";
import { Provider } from 'react-redux';
import { ApplicationState } from '../store';
import Routes from './routes';
import { ConnectedRouter } from 'connected-react-router';
import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';








interface MainProps {
    store: Store <ApplicationState>,
    history: History 
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (<Provider store={store}>
        <BrowserRouter>
                <Routes />
        </BrowserRouter>
    </Provider>);
}

export default Main;