import * as React from 'react';
import Menu from '../components/Menu';

type Props = {

}

const MainWrapper: React.FC<Props> = () => {
    return (<div className="main-wrapper"><h1>Booking</h1><Menu /></div>);
}

export default MainWrapper;