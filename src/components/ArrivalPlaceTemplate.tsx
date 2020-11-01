import * as React from 'react';
import * as Flags from "react-flagkit-svg";
import { ArrivalPlaceTextTemplate } from '../store/stateType'

import { useContext } from "react";
import { ContextApp } from "../app/main";

type Props = {
}

const ArrivalPlaceTemplate: React.FC<Props> = (props) => {
    const { state } = useContext(ContextApp);
    const place: ArrivalPlaceTextTemplate = state.arrivalPlace;

    const FlagName = Flags[place.countryCode];
    return (
        !place.isClear ?
            <div className="textTempl">
                <div className="cityCode">{place.airportCode}</div>
                <div><span className="cityName">{place.city}</span><span className="countryFlag">{FlagName ? <FlagName /> : <div></div>}</span></div>
            </div >
            : <div className="emptyField">Where to?</div>

    );
}

export default ArrivalPlaceTemplate;