import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>HOME</div>
                <div><Link to='/flights'>Goto Page One</Link></div>
                <div><Link to='/hotels'>Goto Page Two</Link></div>
            </div>);
    }
}