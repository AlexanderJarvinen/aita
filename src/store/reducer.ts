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
                    date: new Date(null),
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
                    date: new Date(null),
                    isClear: true
                }
            }
        }
        case "MODIFY_SEARCH": {
            const flight = action.payload;
            return {
                ...state,
                departurePlace: {
                    airportCode: flight.departureAirportCode,
                    city: flight.departureCity,
                    countryCode: flight.departureCountryCode,
                    isClear: false
                },
                arrivalDate: {
                    date: flight.arrivalDate,
                    isClear: false
                },
                arrivalPlace: {
                    airportCode: flight.arrivalAirportCode,
                    city: flight.arrivalCity,
                    countryCode: flight.arrivalCountryCode,
                    isClear: false
                },
                returnDate: {
                    date: flight.returnDate,
                    isClear: false
                }
            
            }
        }
        default: return state;
    }
};
