import * as React from 'react';

type Props = {}

const DateFieldTemplate: React.FC<Props> = (props) => {
    return (
        <div className="textTempl">
            <div className="dayMonth">1 Jan</div>
            <div className="days"><span className="day">Mon,</span><span className="qty">&#177;1 days</span></div>
        </div>
    );
}

export default DateFieldTemplate;