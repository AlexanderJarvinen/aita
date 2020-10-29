import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {}

const Person: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" style={{fill: '#fff'}}>
            <rect x="9" y="4" width="6" height="8" rx="2" stroke="#007AFF" strokeWidth="2" />
            <path d="M20 21C20 20.3306 20 19 20 19C20 17.3431 18.7359 16 17.1765 16H6.82353C5.26414 16 4 17.3431 4 19C4 19 4 20.3069 4 21" stroke="#007AFF" strokeWidth="2" />
        </SvgIcon>
    );
}

export default Person;

