import { State } from './stateType'


export const initialState: State = {
	ticketDesc: {
		qty: null,
		personType: '',
		ticketType: '',
		currency: '',
		isClear: true
	},
	departurePlace: {
		airportCode: '',
		city: '',
		countryCode: '',
		isClear: true
	},
	arrivalPlace: {
		airportCode: '',
		city: '',
		countryCode: '',
		isClear: true
	},
	arrivalDate: {
		date: new Date(null),
		isClear: true
	},
	returnDate: {
		date: new Date(null),
		isClear: true
	},
	historyFlights: [
		{
			departureCountryCode: 'DE',
			departureAirportCode: 'BER',
			departureCity: 'Berlin',
			arrivalDate: new Date('Sat Oct 31 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'NO',
			arrivalAirportCode: 'BGO',
			arrivalCity: 'Bergen',
			returnDate: new Date('Tue Nov 2 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Adult',
			ticketType: 'Economy',
			quantity: 1,
			currency: "EUR"
		},
		{
			departureCountryCode: 'RU',
			departureAirportCode: 'LED',
			departureCity: 'St.Petersburg',
			arrivalDate: new Date('Sat Jan 12 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'RU',
			arrivalAirportCode: 'DME',
			arrivalCity: 'Moscow',
			returnDate: new Date('Tue Feb 2 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 2,
			currency: "RUB"
		},
		{
			departureCountryCode: 'CK',
			departureAirportCode: 'AIU',
			departureCity: 'Atiu Island',
			arrivalDate: new Date('Thu Mar 17 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'PE',
			arrivalAirportCode: 'LIM',
			arrivalCity: 'Lima',
			returnDate: new Date('Tue Apr 30 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 3,
			currency: "AUD"
		},
		{
			departureCountryCode: 'MX',
			departureAirportCode: 'MOX',
			departureCity: 'Morris',
			arrivalDate: new Date('Mon Jun 4 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'CN',
			arrivalAirportCode: 'JGS',
			arrivalCity: 'Ji An',
			returnDate: new Date('Sun Jun 30 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Adult',
			ticketType: 'Lux',
			quantity: 4,
			currency: "MXN"
		},
		{
			departureCountryCode: 'CA',
			departureAirportCode: 'YDK',
			departureCity: 'Main Duck Island',
			arrivalDate: new Date('Wed Jul 10 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'MG',
			arrivalAirportCode: 'TNR',
			arrivalCity: 'Antananarivu',
			returnDate: new Date('Sun Jul 17 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 14,
			currency: "EUR"
		},
		{
			departureCountryCode: 'IS',
			departureAirportCode: 'HFN',
			departureCity: 'Hornafjordur',
			arrivalDate: new Date('Fri Aug 18 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'KH',
			arrivalAirportCode: 'RBE',
			arrivalCity: 'Ratanakiri',
			returnDate: new Date('Mon Aug 25 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 8,
			currency: "CAD"
		},
		{
			departureCountryCode: 'KE',
			departureAirportCode: 'LOY',
			departureCity: 'Loyangalani',
			arrivalDate: new Date('Tue Sep 3 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'KH',
			arrivalAirportCode: 'RBE',
			arrivalCity: 'Ratanakiri',
			returnDate: new Date('Sat Sep 14 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Adult',
			ticketType: 'Lux',
			quantity: 3,
			currency: "ISK"
		},
		{
			departureCountryCode: 'QA',
			departureAirportCode: 'XOZ',
			departureCity: 'Doha Free Zone',
			arrivalDate: new Date('Mon Oct 7 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'GR',
			arrivalAirportCode: 'IOA',
			arrivalCity: 'Ionina',
			returnDate: new Date('Thu Oct 20 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Children',
			ticketType: 'Economy',
			quantity: 9,
			currency: "KES"
		},
		{
			departureCountryCode: 'DJ',
			departureAirportCode: 'AII',
			departureCity: 'Alisabieh',
			arrivalDate: new Date('Wed Nov 12 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'CR',
			arrivalAirportCode: 'SJO',
			arrivalCity: 'San Jose',
			returnDate: new Date('Fri Nov 23 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Adult',
			ticketType: 'Business',
			quantity: 9,
			currency: "QAR"
		},
		{
			departureCountryCode: 'LA',
			departureAirportCode: 'OUI',
			departureCity: 'Lan Polo',
			arrivalDate: new Date('Thu Dec 9 2020 19:25:15 GMT+0300 (������, ����������� �����)'),
			arrivalCountryCode: 'CI',
			arrivalAirportCode: 'ASK',
			arrivalCity: 'Yamoussoukro',
			returnDate: new Date('Mon Dec 18 2020 03:15:15 GMT+0300 (������, ����������� �����)'),
			personType: 'Children',
			ticketType: 'Lux',
			quantity: 5,
			currency: "DJF"
		}
    ]
}
