import * as React from 'react';
import ClockIcon from '../assets/icons/clockIcon';

type Props = {}

const HistoryRow: React.FC<Props> = (props) => {
    return (
        <div className="historyRow">
            <div className="clockIcon"><ClockIcon /></div>
            <div className="historyRowContent">
                <div className="historyRowTicket">
                    <div className="historyRowRoute">SFO-AMS</div>
                    <div className="historyRowDesc">1 Adult, Economy</div>
                </div>
                <div className="historyRowDate">
                    <div>23 Mar-12 Apr</div>
                </div>
            </div>
        </div>
    );
}

export default HistoryRow;