import * as React from 'react';

type Props = {}

const DateFieldTemplate: React.FC<Props> = (props) => {
    return (
        <div className="textTempl">
            <div className="cityCode">1 Jan</div>
            <div><span className="cityName">Mon, &#177; 1 day</span></div>
        </div>
    );
}

export default DateFieldTemplate;