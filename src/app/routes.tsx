import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Root from '../components/Root';
import Tabs from '../components/Tabs';

import Hotels from '../pages/Hotels'; 
import Flights from '../pages/Flights';


const Routes: React.SFC = () => (
    <Root>
        <h1>Booking</h1>
        <Tabs />
        <Switch>
            <Route exact path="/flights" component={Flights} />
            <Route path="/hotels" component={Hotels} />
            <Redirect from='/' to='/flights' />
        </Switch>
    </Root>

)

export default Routes;