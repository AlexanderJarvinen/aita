import * as React from 'react';
import { History } from "history";
import { Store } from "redux";
import { ApplicationState } from '../store'

interface MainProps {
    store: Store <ApplicationState>,
    history: History 
}

const Main: React.FC<MainProps> = ({ store, history }) => {
    return <div>Hello</div>
}

export default Main;