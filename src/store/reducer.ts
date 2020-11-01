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
        case "CLEAR_ARRIVAL_DATE": {
            return {
                ...state, arrivalDate: {
                    date: '',
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
        case "CLEAR_RETURN_DATE": {
            return {
                ...state, returnDate: {
                    date: '',
                    isClear: true
                }
            }
        }
        default: return state;
    }
};
