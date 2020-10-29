import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {}

const FilledBlueCircle: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#007AFF" fillOpacity="0.2" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#007AFF" />
        </SvgIcon>
    );
}

export default FilledBlueCircle;


