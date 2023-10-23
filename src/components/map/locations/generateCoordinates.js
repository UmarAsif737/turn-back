// import axios from "axios";
// import locationData from "./locations.json";

// ///////////////////////////////////////////////////////////////////////////////
// // Run this to get a list of coordinates for each address in locations.json //
// /////////////////////////////////////////////////////////////////////////////

// const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// const getCoordinates = async (address) => {
// 	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${mapsKey}`;

// 	const response = await axios.get(url);
// 	const data = response.data;

// 	if (data.status === "OK") {
// 		const location = data.results[0].geometry.location;
// 		return location;
// 	} else {
// 		// Handle error
// 		console.log(`Failed to get coordinates for address: ${address}`);
// 		return null;
// 	}
// };

// const fetchCoordinates = async () => {
// 	// Using the address data from locationData import
// 	const addresses = locationData.locations.map((loc) => loc.address);

// 	const newLocations = [];

// 	for (const address of addresses) {
// 		const coords = await getCoordinates(address);
// 		if (coords) {
// 			newLocations.push({
// 				lat: coords.lat,
// 				lng: coords.lng,
// 				text: address,
// 			});
// 		}
// 	}

// 	// Logging the array of new locations with coordinates
// 	console.log(newLocations);
// };

// // Invoke the function to fetch and log the coordinates
// fetchCoordinates();
