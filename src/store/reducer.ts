import { State, Action } from "../store/stateType";


export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "CLEAR_DEPARTURE_PLACE": {
            return {
                ...state, departurePlace:{
                    airportCode: '',
                    city: '',
                    countryCode: '',
                }
            }
        }
        default: return state;
    }
};
