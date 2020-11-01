import * as React from 'react';
import { ClockIcon } from '../components/Icons';
import { HistoryFlight } from '../store/stateType';

import { ActionType } from "../store/stateType";
import { useContext } from "react";
import { ContextApp } from "../app/main";

type Props = {
    historyFlight: HistoryFlight
}


const HistoryRow: React.FC<Props> = (props) => {
    const { changeState } = useContext(ContextApp);

    const modifySearchFields = (flight: HistoryFlight) => {
        changeState({
            type: ActionType.MODIFY_SEARCH,
            payload: flight
        });
    }

    return (
        <div className="historyRow" onClick={() => { modifySearchFields(props.historyFlight) }}>
            <div className="clockIcon"><ClockIcon /></div>
            <div className="historyRowContent">
                <div className="historyRowTicket">
                    <div className="historyRowRoute">{props.historyFlight.departureAirportCode}-{props.historyFlight.arrivalAirportCode}</div>
                    <div className="historyRowDesc">{props.historyFlight.quantity} {props.historyFlight.personType}, {props.historyFlight.ticketType}</div>
                </div>
                <div className="historyRowDate">
                    <div>{props.historyFlight.arrivalDate.toString().split(' ').slice(1, 3).reverse().join(' ')}-{props.historyFlight.returnDate.toString().split(' ').slice(1, 3).reverse().join(' ')}</div>
                </div>
            </div>
        </div>
    );
}

export default HistoryRow;