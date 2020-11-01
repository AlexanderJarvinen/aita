import { State, Action } from "../store/stateType";


export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "CLEAR_DEPARTURE_PLACE": {
            return {
                ...state, departurePlace:{
                    airportCode: '',
                    city: '',
                    countryCode: '',
                    isClear: true
                }
            }
        }
        case "CLEAR_ARRIVAL_PLACE": {
            return {
                ...state, arrivalPlace: {
                    airportCode: '',
                    city: '',
                    countryCode: '',
                    isClear: true
                }
            }
        }
        default: return state;
    }
};
