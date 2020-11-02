import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Root from '../components/Root';
import Tabs from '../components/Tabs';

import Hotels from '../pages/Hotels'; 
import Flights from '../pages/Flights';

import { CSSTransition } from 'react-transition-group';

const routes = [
    { path: '/flights', name: 'Flights', Component: Flights },
    { path: '/hotels', name: 'Hotels', Component: Hotels },
];

const Routes: React.SFC = () => (
    <Root>
        <h1>Booking</h1>
        <Tabs />
        <div>
            <Redirect from='/' to='/flights' />
            {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                    {({ match }) => (
                        <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                            <div className="page">
                                <Component />
                            </div>
                        </CSSTransition>
                    )}
                </Route>
            ))}
        </div>
    </Root>
)

export default Routes;