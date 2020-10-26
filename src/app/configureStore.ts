import { Store, createStore } from "redux";
import { History } from "history";
import { ApplicationState, createRootReducer } from "../store";


export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {

    const store:Store = createStore(
        createRootReducer(history),
        initialState,
    )

    return store;
}