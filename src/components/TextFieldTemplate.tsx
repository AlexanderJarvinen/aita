import * as React from 'react';
import { DE } from "react-flagkit-svg";

type Props = {}

const TextFieldTemplate: React.FC<Props> = (props) => {
    return (
        <div className="textTempl">
            <div className="cityCode">Ber</div>
            <div><span className="cityName">Berlin</span><span className="countryFlag"><DE /></span></div>
        </div>
    );
}

export default TextFieldTemplate;