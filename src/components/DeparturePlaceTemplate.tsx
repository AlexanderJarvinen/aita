import * as React from 'react';
import * as Flags from "react-flagkit-svg";
import { DeparturePlaceTextTemplate } from '../store/stateType'

import { useContext } from "react";
import { ContextApp } from "../app/main";

type Props = {
}

const DeparturePlaceTemplate: React.FC<Props> = (props) => {
    const { state } = useContext(ContextApp);
    const place: DeparturePlaceTextTemplate = state.departurePlace;

    const FlagName = Flags[place.countryCode];
    return (
        !place.isClear ?
            <div className="textTempl">
                <div className="cityCode">{place.airportCode}</div>
                <div><span className="cityName">{place.city}</span><span className="countryFlag">{FlagName ? <FlagName /> : <div></div>}</span></div>
            </div >
            : <div className="emptyField">Where from?</div>
        
    );
}

export default DeparturePlaceTemplate;