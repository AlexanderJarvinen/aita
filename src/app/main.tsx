import * as React from 'react';
import { History } from "history";
import { Store } from "redux";
import { Provider } from 'react-redux';
import { ApplicationState } from '../store';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';








interface MainProps {
    store: Store <ApplicationState>,
    history: History 
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return (<Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Routes />
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>);
}

export default Main;