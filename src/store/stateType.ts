import { Dispatch } from "react";

export type departurPlaceTextTemplate = {
	airportCode: string,
	city: string,
	countryCode: string,
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
	departurePlace: departurPlaceTextTemplate,
	historyFlights: HistoryFlights
}

export enum ActionType { 
	CLEAR_DEPARTURE_PLACE = 'CLEAR_DEPARTURE_PLACE'
}


export type ActionClearDeparture = {
	type: ActionType.CLEAR_DEPARTURE_PLACE
}

export type Action = ActionClearDeparture;

export type ContextState = {
	state: State;
	changeState: Dispatch<Action>
}