import * as React from 'react';
import * as Flags from "react-flagkit-svg";

import { useContext } from "react";
import { ContextApp } from "../app/main";

type Props = {
}

const TextFieldTemplate: React.FC<Props> = (props) => {
    const { state } = useContext(ContextApp);
    let FlagName = Flags[state.departurePlace.countryCode];
    return (
        <div className="textTempl">
            <div className="cityCode">{state.departurePlace.airportCode}</div>
            <div><span className="cityName">{state.departurePlace.city}</span><span className="countryFlag">{FlagName ? <FlagName />:<div></div>}</span></div>
        </div>
    );
}

export default TextFieldTemplate;