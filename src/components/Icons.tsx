import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const CrossIcon: React.FC = () => {
    return (
        <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8Z" fill="#80848F" />
        </SvgIcon>
    );
}


export const ArrivalDate: React.FC = () => {
    return (
        <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" stroke="#007AFF" strokeWidth="2" strokeLinejoin="round" />
            <path d="M4 8H20" stroke="#007AFF" strokeWidth="2" />
            <rect x="15" y="15" width="2" height="2" fill="#007AFF" />
            <rect x="11" y="15" width="2" height="2" fill="#007AFF" />
        </SvgIcon>
    );
}


export const ArrowButton: React.FC = () => {
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


export const ClockIcon: React.FC = () => {
    return (
        <SvgIcon width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 20.0164C16.4183 20.0164 20 16.4347 20 12.0164C20 7.59811 16.4183 4.01639 12 4.01639C7.58172 4.01639 4 7.59811 4 12.0164C4 16.4347 7.58172 20.0164 12 20.0164Z" stroke="black" strokeWidth="2" />
            <path d="M11.5 9.01639V13.0164H15.5" stroke="black" strokeWidth="2" />
        </SvgIcon>
    );
}


export const DepartureDate: React.FC = () => {
    return (
        <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" stroke="#007AFF" strokeWidth="2" strokeLinejoin="round" />
            <path d="M4 8H20" stroke="#007AFF" strokeWidth="2" />
            <rect x="7" y="11" width="2" height="2" fill="#007AFF" />
            <rect x="11" y="11" width="2" height="2" fill="#007AFF" />
        </SvgIcon>
    );
}


export const EmptyBlueCircle: React.FC = () => {
    return (
        <SvgIcon width="16" height="16" viewBox="0 0 24 24" fill="rgba(120, 120, 128, 0.16)">
            <path d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" stroke="#007AFF" strokeWidth="2" />
        </SvgIcon>
    );
}


export const FilledBlueCircle: React.FC = () => {
    return (
        <SvgIcon width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#007AFF" fillOpacity="0.2" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#007AFF" />
        </SvgIcon>
    );
}


export const Person: React.FC = () => {
    return (
        <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ fill: '#fff' }}>
            <rect x="9" y="4" width="6" height="8" rx="2" stroke="#007AFF" strokeWidth="2" />
            <path d="M20 21C20 20.3306 20 19 20 19C20 17.3431 18.7359 16 17.1765 16H6.82353C5.26414 16 4 17.3431 4 19C4 19 4 20.3069 4 21" stroke="#007AFF" strokeWidth="2" />
        </SvgIcon>
    );
}


export const VerticalLine: React.FC = () => {
    return (
        <SvgIcon width="2" height="82" viewBox="0 0 2 82" fill="none" style={{ height: '2.4em' }}>
            <path d="M1 1V82" stroke="#007AFF" strokeWidth="2" strokeLinecap="square" />
        </SvgIcon>
    );
}

export const Plus: React.FC = () => {
    return (
        <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="2" fill="#007AFF" />
            <rect x="11" y="3" width="2" height="18" fill="#007AFF" />
        </SvgIcon>
    );
}







