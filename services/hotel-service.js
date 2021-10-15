const HOTELS = require('./data/hotels.json').hotels;

const getHotels = () => {
	return HOTELS;
}

const getHotelByRIDCode = ( ridCode ) => {
	getHotels().find( hotel => hotel.ridCode === ridCode )
}

module.exports = {
	getHotels: getHotels,
	getHotelByRIDCode: getHotelByRIDCod
}