import { Dispatch } from "react";

export type DeparturePlaceTextTemplate = {
	airportCode: string,
	city: string,
	countryCode: string,
	isClear: boolean
}

export type ArrivalPlaceTextTemplate = {
	airportCode: string,
	city: string,
	countryCode: string,
	isClear: boolean
}

export type HistoryFlight = {
	departureCountryCode: string,
	departureAirportCode: string,
	departureCity: string,
	departureDate: Date,
	arrivalCountryCode: string,
	arrivalAirportCode: string,
	arrivalCity: string,
	arrivalDate: Date,
	personType: string,
	ticketType: string,
	quantity: number
}

export type HistoryFlights = HistoryFlight[];

export type State = {
	departurePlace: DeparturePlaceTextTemplate,
	arrivalPlace: ArrivalPlaceTextTemplate,
	historyFlights: HistoryFlights
}

export enum ActionType { 
	CLEAR_DEPARTURE_PLACE = 'CLEAR_DEPARTURE_PLACE',
	CLEAR_ARRIVAL_PLACE = 'CLEAR_ARRIVAL_PLACE'
}


export type ActionClearDeparture = {
	type: ActionType.CLEAR_DEPARTURE_PLACE
}

export type ActionClearArrival = {
	type: ActionType.CLEAR_ARRIVAL_PLACE
}

export type Action = ActionClearDeparture | ActionClearArrival;

export type ContextState = {
	state: State;
	changeState: Dispatch<Action>
}