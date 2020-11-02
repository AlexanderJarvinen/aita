import * as React from 'react';
import { NavLink } from 'react-router-dom';


const Tabs: React.SFC = () => (
    <div className="nav">
            <div className="nav-tab"><NavLink exact to='/flights' activeClassName="active">Flights</NavLink></div>
            <div className="nav-tab"><NavLink exact to='/hotels' activeClassName="active">Hotels</NavLink></div>
    </div>        
);

export default Tabs;

{/*<div className="nav" >
        {links.map(({ path, name }) => (
            <div className="nav-tab">
            <CSSTransition
                in={true}
                timeout={300}
                classNames="tab"
                unmountOnExit
            >
                <NavLink key={path} exact to={path} activeClassName="active">
                        
                           
                        
                            {name}
                     
                            
                  
                </NavLink>
            </CSSTransition>
                </div>
                ))}
            </div>*/}