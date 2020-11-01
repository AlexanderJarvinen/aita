import * as React from 'react';
import { useReducer } from "react";
import { History } from "history";
import { Store } from "redux";
import { Provider } from 'react-redux';
import { ApplicationState } from '../store';
import Routes from './routes';
//import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import themeMobile from '../theme/themeMobile';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Action, State, ContextState } from "../store/stateType";
import { initialState } from '../store/initialState';
import { reducer } from '../store/reducer'


interface MainProps {
    store: Store <ApplicationState>,
    history: History 
}

export const ContextApp = React.createContext<Partial<ContextState>>({});

const Main: React.FC<MainProps> = ({ store, history }) => {
    const matches = useMediaQuery('(min-width:600px)');

    const [state, changeState] = useReducer<React.Reducer<State, Action>>(reducer, initialState);

    const ContextState: ContextState = {
        state,
        changeState
    };

    return (<Provider store={store}>
        <ConnectedRouter history={history}>
            <ThemeProvider theme={matches ? theme : themeMobile}>
                <ContextApp.Provider value={ContextState}>
                    <Routes />
                </ContextApp.Provider>
            </ThemeProvider>
        </ConnectedRouter>
    </Provider>);
}

export default Main;