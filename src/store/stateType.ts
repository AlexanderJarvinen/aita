import { Dispatch } from "react";

export type DeparturePlaceTextTemplate = {
	airportCode: string,
	city: string,
	countryCode: string,
	isClear: boolean
}

export type ArrivalDateTemplate = {
	date: string,
	isClear: boolean
}

export type ArrivalPlaceTextTemplate = {
	airportCode: string,
	city: string,
	countryCode: string,
	isClear: boolean
}

export type ReturnDateTemplate = {
	date: string,
	isClear: boolean
}

export type HistoryFlight = {
	departureCountryCode: string,
	departureAirportCode: string,
	departureCity: string,
	arrivalDate: Date,
	arrivalCountryCode: string,
	arrivalAirportCode: string,
	arrivalCity: string,
	returnDate: Date,
	personType: string,
	ticketType: string,
	quantity: number
}

export type HistoryFlights = HistoryFlight[];

export type State = {
	departurePlace: DeparturePlaceTextTemplate,
	arrivalDate: ArrivalDateTemplate,
	arrivalPlace: ArrivalPlaceTextTemplate,
	returnDate: ReturnDateTemplate,
	historyFlights: HistoryFlights
}

export enum ActionType { 
	CLEAR_DEPARTURE_PLACE = 'CLEAR_DEPARTURE_PLACE',
	CLEAR_ARRIVAL_DATE = 'CLEAR_ARRIVAL_DATE',
	CLEAR_ARRIVAL_PLACE = 'CLEAR_ARRIVAL_PLACE',
	CLEAR_RETURN_DATE = 'CLEAR_RETURN_DATE'
}


export type ActionClear = {
	type: ActionType.CLEAR_DEPARTURE_PLACE | ActionType.CLEAR_ARRIVAL_DATE | ActionType.CLEAR_ARRIVAL_PLACE | ActionType.CLEAR_RETURN_DATE
}

//export type ActionClearArrival = {
//	type: ActionType.CLEAR_ARRIVAL_PLACE
//}

export type Action = ActionClear;

export type ContextState = {
	state: State;
	changeState: Dispatch<Action>
}