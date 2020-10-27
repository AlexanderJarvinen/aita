import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Root from '../components/Root';
import MainWrapper from '../components/MainWrapper';
//import Menu from '../components/Menu';

import Hotels from '../pages/Hotels'; 
import Flights from '../pages/Flights';


const Routes: React.SFC = () => (
    <div>
        <MainWrapper />
        <Switch>
            <Route path="/flights" component={Flights} />
            <Route path="/hotels" component={Hotels} />
        </Switch>
    </div>

)

export default Routes;