import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {}

const ClockIcon: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 20.0164C16.4183 20.0164 20 16.4347 20 12.0164C20 7.59811 16.4183 4.01639 12 4.01639C7.58172 4.01639 4 7.59811 4 12.0164C4 16.4347 7.58172 20.0164 12 20.0164Z" stroke="black" strokeWidth="2" />
            <path d="M11.5 9.01639V13.0164H15.5" stroke="black" strokeWidth="2" />
        </SvgIcon>
    );
}

export default ClockIcon;


