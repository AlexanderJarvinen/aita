import * as React from 'react';

type Props = {}

const DateFieldTemplate: React.FC<Props> = (props) => {
    return (
        <div className="textTempl">
            <div className="dayMonth">1 Jan</div>
            <div><span className="qtyDays">Mon, &#177; 1 day</span></div>
        </div>
    );
}

export default DateFieldTemplate;