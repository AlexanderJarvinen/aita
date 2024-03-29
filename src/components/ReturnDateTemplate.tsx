import * as React from 'react';
import { ReturnDateTemplate } from '../store/stateType'

import { useContext } from "react";
import { ContextApp } from "../app/main";


const ReturnDateFieldTemplate: React.FC = () => {
    const { state } = useContext(ContextApp);
    const date: ReturnDateTemplate = state.returnDate;
    const dateArr = date.date.toString().split(' ').slice(0, 3);

    return (
        !date.isClear ?
            <div className="textTempl">
                <div className="dayMonth">{dateArr.slice(1, 3).reverse().join().replace(',', ' ')}</div>
                <div className="days"><span className="day">{dateArr[0]}</span></div>
            </div>
            : <div className="emptyField">Return Date</div>
    );
}

export default ReturnDateFieldTemplate;
