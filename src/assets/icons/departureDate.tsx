import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {}

const DepartureDate: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" stroke="#007AFF" strokeWidth="2" strokeLinejoin="round" />
            <path d="M4 8H20" stroke="#007AFF" strokeWidth="2" />
            <rect x="7" y="11" width="2" height="2" fill="#007AFF" />
            <rect x="11" y="11" width="2" height="2" fill="#007AFF" />
        </SvgIcon>
    );
}

export default DepartureDate;

