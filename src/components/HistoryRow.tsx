import * as React from 'react';
import ClockIcon from '../assets/icons/clockIcon';
import { HistoryFlight } from '../store/stateType';

type Props = {
    historyFlight: HistoryFlight
}


const HistoryRow: React.FC<Props> = (props) => {
    return (
        <div className="historyRow">
            <div className="clockIcon"><ClockIcon /></div>
            <div className="historyRowContent">
                <div className="historyRowTicket">
                    <div className="historyRowRoute">{props.historyFlight.departureAirportCode}-{props.historyFlight.arrivalAirportCode}</div>
                    <div className="historyRowDesc">{props.historyFlight.quantity} {props.historyFlight.personType}, {props.historyFlight.ticketType}</div>
                </div>
                <div className="historyRowDate">
                    <div>{props.historyFlight.departureDate.toString().split(' ').slice(1, 3).reverse().join(' ')}-{props.historyFlight.arrivalDate.toString().split(' ').slice(1, 3).reverse().join(' ')}</div>
                </div>
            </div>
        </div>
    );
}

export default HistoryRow;