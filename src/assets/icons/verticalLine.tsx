import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';



type Props = {}

const VerticalLine: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="2" height="82" viewBox="0 0 2 82" fill="none" style={{ height: '2.4em' }}>
            <path d="M1 1V82" stroke="#007AFF" strokeWidth="2" strokeLinecap="square" />
        </SvgIcon>
    );
}

export default VerticalLine;
