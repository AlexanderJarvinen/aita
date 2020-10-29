import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

type Props = {}

const CrossIcon: React.FC<Props> = (props) => {
    return (
        <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none">     
          <path fillRule="evenodd" clipRule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM6.58579 8L4.29289 5.70711L5.70711 4.29289L8 6.58579L10.2929 4.29289L11.7071 5.70711L9.41421 8L11.7071 10.2929L10.2929 11.7071L8 9.41421L5.70711 11.7071L4.29289 10.2929L6.58579 8Z" fill="#80848F" />
        </SvgIcon>
    );
}

export default CrossIcon;


