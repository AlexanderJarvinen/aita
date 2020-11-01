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
	historyFlights: [
		{
			departureCountryCode: 'DE',
			departureAirportCode: 'BER',
			departureCity: 'Berlin',
			departureDate: new Date('Sat Oct 31 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'NO',
			arrivalAirportCode: 'BGO',
			arrivalCity: 'Bergen',
			arrivalDate: new Date('Tue Nov 2 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Economy',
			quantity: 1
		},
		{
			departureCountryCode: 'RU',
			departureAirportCode: 'LED',
			departureCity: 'St.Petersburg',
			departureDate: new Date('Sat Jan 12 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'RU',
			arrivalAirportCode: 'DME',
			arrivalCity: 'Moscow',
			arrivalDate: new Date('Tue Feb 2 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 2
		},
		{
			departureCountryCode: 'CK',
			departureAirportCode: 'AIU',
			departureCity: 'Atiu Island',
			departureDate: new Date('Thu Mar 17 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'PE',
			arrivalAirportCode: 'LIM',
			arrivalCity: 'Lima',
			arrivalDate: new Date('Tue Apr 30 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 3
		},
		{
			departureCountryCode: 'MX',
			departureAirportCode: 'MOX',
			departureCity: 'Morris',
			departureDate: new Date('Mon Jun 4 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'CN',
			arrivalAirportCode: 'JGS',
			arrivalCity: 'Ji An',
			arrivalDate: new Date('Sun Jun 30 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Lux',
			quantity: 4
		},
		{
			departureCountryCode: 'CA',
			departureAirportCode: 'YDK',
			departureCity: 'Main Duck Island',
			departureDate: new Date('Wed Jul 10 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'MG',
			arrivalAirportCode: 'TNR',
			arrivalCity: 'Antananarivu',
			arrivalDate: new Date('Sun Jul 17 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 14
		},
		{
			departureCountryCode: 'IS',
			departureAirportCode: 'HFN',
			departureCity: 'Hornafjordur',
			departureDate: new Date('Fri Aug 18 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'KH',
			arrivalAirportCode: 'RBE',
			arrivalCity: 'Ratanakiri',
			arrivalDate: new Date('Mon Aug 25 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 8
		},
		{
			departureCountryCode: 'KE',
			departureAirportCode: 'LOY',
			departureCity: 'Loyangalani',
			departureDate: new Date('Tue Sep 3 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'KH',
			arrivalAirportCode: 'RBE',
			arrivalCity: 'Ratanakiri',
			arrivalDate: new Date('Sat Sep 14 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Lux',
			quantity: 3
		},
		{
			departureCountryCode: 'QA',
			departureAirportCode: 'XOZ',
			departureCity: 'Doha Free Zone',
			departureDate: new Date('Mon Oct 7 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'GR',
			arrivalAirportCode: 'IOA',
			arrivalCity: 'Ionina',
			arrivalDate: new Date('Thu Oct 20 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 9
		},
		{
			departureCountryCode: 'DJ',
			departureAirportCode: 'AII',
			departureCity: 'Alisabieh',
			departureDate: new Date('Wed Nov 12 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'CR',
			arrivalAirportCode: 'SJO',
			arrivalCity: 'San Jose',
			arrivalDate: new Date('Fri Nov 23 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 9
		},
		{
			departureCountryCode: 'LA',
			departureAirportCode: 'OUI',
			departureCity: 'Lan Polo',
			departureDate: new Date('Thu Dec 9 2020 19:25:15 GMT+0300 (Москва, стандартное время)'),
			arrivalCountryCode: 'CI',
			arrivalAirportCode: 'ASK',
			arrivalCity: 'Yamoussoukro',
			arrivalDate: new Date('Mon Dec 18 2020 03:15:15 GMT+0300 (Москва, стандартное время)'),
			personType: 'Children',
			ticketType: 'Lux',
			quantity: 5
		}
    ]
}
