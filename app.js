const userService = require('./services/user-service');
const hotelService = require('./services/hotel-service');
const priceService = require('./services/price-service');
const helper = require('./services/helper');

function findHotelsNearby (lat, lng, radius = 2000) {

	const hotelsNearby = [];
	hotelService.getHotels().forEach( (hotel) => {
		const distance = helper.distance(lat, lng, hotel.latitude, hotel.longitude)

		if (distance <= radius) {
			nearbyHotels.push({
				ridCode: hotel.ridCode,
				countryCode: hotel.countryCode,
				localRating: hotel.localRating,
				address: hotel.address,
				commercialName: hotel.commercialName,
				distance: distance.toFixed(0)
			})
		}
	})

	return JSON.stringify(hotelsNearby);
}

function findHotelNearbyWithBestOffer (lat, lng, radius = 2000, date = Date.now()) {

	const filteredPricesOffers = priceService.getPricesByFareType("STANDARD")
	const filteredPricesOffersByDate = priceService.filterPricesOffersByDate(filteredPricesOffers);
	let lowestPrice = 0;
	filteredPrices.forEach( ( hotelOffers ) => {
		// Loop and find the best prices
	} )
	// Array length > 1 ? use the distance helper 
	const hotelsNearby = findHotelsNearby(lat, lng, radius)

	return null;
}


module.exports = {
	findHotelsNearby: findHotelsNearby,
	findHotelNearbyWithBestOffer: findHotelNearbyWithBestOffer
}
