import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {}

const EmptyBlueCircle: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="16" height="16" viewBox="0 0 24 24" fill="rgba(120, 120, 128, 0.16)">
            <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#007AFF" strokeWidth="2" />
        </SvgIcon>
    );
}

export default EmptyBlueCircle;

