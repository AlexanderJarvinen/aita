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
                },
                ticketDesc: {
                    qty: flight.quantity,
                    personType: flight.personType,
                    ticketType: flight.ticketType,
                    currency: flight.currency,
                    isClear: false
                }
            
            }
        }
        case "TOGGLE_VALUES": {
            return {
                ...state,
                departurePlace: {
                    airportCode: action.payload_1.airportCode,
                    city: action.payload_1.city,
                    countryCode: action.payload_1.countryCode,
                    isClear: action.payload_1.isClear
                },
                arrivalPlace: {
                    airportCode: action.payload_2.airportCode,
                    city: action.payload_2.city,
                    countryCode: action.payload_2.countryCode,
                    isClear: action.payload_2.isClear
                }
            }
        }
        default: return state;
    }
};
