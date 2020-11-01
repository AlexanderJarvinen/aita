import { State } from './stateType'


export const initialState: State = {
	departurePlace: {
		airportCode: 'BER',
		city: 'Berlin',
		countryCode: 'DE',
		isClear: false
	},
	arrivalPlace: {
		airportCode: 'BER',
		city: 'Berlin',
		countryCode: 'DE',
		isClear: false
	},
	arrivalDate: {
		date: 'Sat Oct 31 2020 19:25:15 GMT+0300 (Москва, стандартное время)',
		isClear: false
	},
	returnDate: {
		date: 'Tue Nov 2 2020 03:15:15 GMT+0300 (Москва, стандартное время)',
		isClear: false
	},
	historyFlights: [
		{
			departureCountryCode: 'DE',
			departureAirportCode: 'BER',
			departureCity: 'Berlin',
			arrivalDate: new Date('Sat Oct 31 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'NO',
			arrivalAirportCode: 'BGO',
			arrivalCity: 'Bergen',
			returnDate: new Date('Tue Nov 2 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Economy',
			quantity: 1
		},
		{
			departureCountryCode: 'RU',
			departureAirportCode: 'LED',
			departureCity: 'St.Petersburg',
			arrivalDate: new Date('Sat Jan 12 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'RU',
			arrivalAirportCode: 'DME',
			arrivalCity: 'Moscow',
			returnDate: new Date('Tue Feb 2 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 2
		},
		{
			departureCountryCode: 'CK',
			departureAirportCode: 'AIU',
			departureCity: 'Atiu Island',
			arrivalDate: new Date('Thu Mar 17 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'PE',
			arrivalAirportCode: 'LIM',
			arrivalCity: 'Lima',
			returnDate: new Date('Tue Apr 30 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 3
		},
		{
			departureCountryCode: 'MX',
			departureAirportCode: 'MOX',
			departureCity: 'Morris',
			arrivalDate: new Date('Mon Jun 4 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'CN',
			arrivalAirportCode: 'JGS',
			arrivalCity: 'Ji An',
			returnDate: new Date('Sun Jun 30 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Lux',
			quantity: 4
		},
		{
			departureCountryCode: 'CA',
			departureAirportCode: 'YDK',
			departureCity: 'Main Duck Island',
			arrivalDate: new Date('Wed Jul 10 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'MG',
			arrivalAirportCode: 'TNR',
			arrivalCity: 'Antananarivu',
			returnDate: new Date('Sun Jul 17 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 14
		},
		{
			departureCountryCode: 'IS',
			departureAirportCode: 'HFN',
			departureCity: 'Hornafjordur',
			arrivalDate: new Date('Fri Aug 18 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'KH',
			arrivalAirportCode: 'RBE',
			arrivalCity: 'Ratanakiri',
			returnDate: new Date('Mon Aug 25 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 8
		},
		{
			departureCountryCode: 'KE',
			departureAirportCode: 'LOY',
			departureCity: 'Loyangalani',
			arrivalDate: new Date('Tue Sep 3 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'KH',
			arrivalAirportCode: 'RBE',
			arrivalCity: 'Ratanakiri',
			returnDate: new Date('Sat Sep 14 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Lux',
			quantity: 3
		},
		{
			departureCountryCode: 'QA',
			departureAirportCode: 'XOZ',
			departureCity: 'Doha Free Zone',
			arrivalDate: new Date('Mon Oct 7 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'GR',
			arrivalAirportCode: 'IOA',
			arrivalCity: 'Ionina',
			returnDate: new Date('Thu Oct 20 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 9
		},
		{
			departureCountryCode: 'DJ',
			departureAirportCode: 'AII',
			departureCity: 'Alisabieh',
			arrivalDate: new Date('Wed Nov 12 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'CR',
			arrivalAirportCode: 'SJO',
			arrivalCity: 'San Jose',
			returnDate: new Date('Fri Nov 23 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 9
		},
		{
			departureCountryCode: 'LA',
			departureAirportCode: 'OUI',
			departureCity: 'Lan Polo',
			arrivalDate: new Date('Thu Dec 9 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'CI',
			arrivalAirportCode: 'ASK',
			arrivalCity: 'Yamoussoukro',
			returnDate: new Date('Mon Dec 18 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Lux',
			quantity: 5
		}
    ]
}
