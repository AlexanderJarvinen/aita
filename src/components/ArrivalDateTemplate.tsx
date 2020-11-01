import * as React from 'react';
import { ArrivalDateTemplate } from '../store/stateType'

import { useContext } from "react";
import { ContextApp } from "../app/main";

const ArrivalDateFieldTemplate: React.FC = () => {
    const { state } = useContext(ContextApp);
    const date: ArrivalDateTemplate = state.arrivalDate;
    const dateArr = date.date.toString().split(' ').slice(0, 3);

    return (
        !date.isClear?
        <div className="textTempl">
            <div className="dayMonth">{dateArr.slice(1, 3).reverse().join().replace(',', ' ')}</div>
            <div className="days"><span className="day">{dateArr[0]}</span></div>
        </div>
        : <div className="emptyField">Arrival Date</div>
    );
}

export default ArrivalDateFieldTemplate;