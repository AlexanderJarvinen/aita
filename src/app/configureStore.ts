import { Store, createStore, applyMiddleware } from "redux";
import { History } from "history";
import { ApplicationState, createRootReducer } from "../store";
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';


export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {

    const composeEnhancers = composeWithDevTools({})

    const store: any = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history)))
    )

    return store;
}