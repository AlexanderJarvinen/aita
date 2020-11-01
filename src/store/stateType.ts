import { Dispatch } from "react";

export type TicketDescription = {
	qty: number,
	personType: string,
	ticketType: string,
	currency: string,
	isClear: boolean
}

export type DeparturePlaceTextTemplate = {
	airportCode: string,
	city: string,
	countryCode: string,
	isClear: boolean
}

export type ArrivalDateTemplate = {
	date: Date,
	isClear: boolean
}

export type ArrivalPlaceTextTemplate = {
	airportCode: string,
	city: string,
	countryCode: string,
	isClear: boolean
}

export type ReturnDateTemplate = {
	date: Date,
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
	quantity: number,
	currency: string
}

export type HistoryFlights = HistoryFlight[];

export type State = {
	ticketDesc: TicketDescription,
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
	CLEAR_RETURN_DATE = 'CLEAR_RETURN_DATE',
	MODIFY_SEARCH = 'MODIFY_SEARCH'
}


export type ActionClear = {
	type: ActionType.CLEAR_DEPARTURE_PLACE | ActionType.CLEAR_ARRIVAL_DATE | ActionType.CLEAR_ARRIVAL_PLACE | ActionType.CLEAR_RETURN_DATE
}

export type ActionModify = {
	type: ActionType.MODIFY_SEARCH,
	payload: HistoryFlight
}

export type Action = ActionClear | ActionModify;

export type ContextState = {
	state: State;
	changeState: Dispatch<Action>
}