import { Dispatch } from "react";

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
	historyFlights: HistoryFlights
}

export enum ActionType {
	FETCH_REQUEST = 'FETCH_REQUEST'
}
export type ActionStringPayload = {
	type: ActionType.FETCH_REQUEST,
}

export type Action = ActionStringPayload;

export type ContextState = {
	state: State;
	changeState: Dispatch<Action>
}