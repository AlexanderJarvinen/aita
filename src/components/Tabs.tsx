import * as React from 'react';
import { NavLink } from 'react-router-dom';


const Tabs: React.SFC = () => (
    <div className="nav">
            <div className="nav-tab"><NavLink exact to='/flights' activeClassName="active">Flights</NavLink></div>
            <div className="nav-tab"><NavLink exact to='/hotels' activeClassName="active">Hotels</NavLink></div>
    </div>        
);

export default Tabs;
