import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {}

const ArrowButton: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white" />
            <path d="M5 17L10 22L15 17" stroke="#80848F" strokeWidth="2" />
            <path d="M10 9V21" stroke="#80848F" strokeWidth="2" strokeLinecap="square" />
            <path d="M17 14L22 9L27 14" stroke="#80848F" strokeWidth="2" />
            <path d="M22 22V10" stroke="#80848F" strokeWidth="2" strokeLinecap="square" />
        </SvgIcon>
    );
}

export default ArrowButton;

