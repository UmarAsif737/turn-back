import { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import locationData from "./locations/locations.json";
import "./map.styles.scss";

///////////////////////////////
// Marker Component for Map //
/////////////////////////////

const Map = () => {
	// const Marker = ({ isHovered, onMouseEnter, onMouseLeave }) => (
	// 	<div
	// 		style={{
	// 			width: "10px",
	// 			height: "10px",
	// 			borderRadius: "10px",
	// 			background: isHovered ? "blue" : "red",
	// 			cursor: "pointer",
	// 		}}
	// 		onMouseEnter={onMouseEnter}
	// 		onMouseLeave={onMouseLeave}
	// 	></div>
	// );

	const Marker = ({ isHovered, onMouseEnter, onMouseLeave }) => {
		const markerStyle = {
			width: "10px",
			height: "10px",
			borderRadius: "10px",
			backgroundColor: isHovered ? "blue" : "red",
			cursor: "pointer",
		};

		console.log(isHovered);

		return (
			<>
				<div
					style={markerStyle}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
			</>
		);
	};

	const locationImagePath = "src/components/map/locations/images/";
	const locationPlatPath = "src/components/map/locations/plats/";
	//////////////////////////
	// Google Maps API Key //
	////////////////////////
	const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

	///////////////////////
	// Address Batching //////////////////////////////////////
	// Only use this to get a new copy of coordinates.json /////////
	// Can also be used for real-time processing, but expensive. //
	// More in README.md /////////////////////////////////////////
	//////////////////////

	/*

	// Coordinate Array
	const [coordinates, setCoordinates] = useState([]);

	// Convert Addresses to Coordinates - used in getCoordinatesBatch()
	async function getCoordinates(address) {
		const response = await axios.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				address
			)}&key=${mapsKey}`
		);
		return response.data.results[0].geometry.location;
	}

	// Pull Addresses, pass them through getCoordinates()
	async function getCoordinatesBatch(addressData) {
		const addresses = addressData.locations.map(
			(item) => item.address + ", Augusta, GA"
		);
		const promises = addresses.map((address) => getCoordinates(address));
		const coordsArray = await Promise.all(promises);
		return coordsArray;
	}

	// Downloads coordinates in-browser.
	const downloadData = (data) => {
		const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "coordinates.json";
		a.click();
		URL.revokeObjectURL(url);
	};

	// Set Coordinate Array state [coordinates, setCoordinates]
	useEffect(() => {
		const fetchData = async () => {
			const coords = await getCoordinatesBatch(locationData);
			setCoordinates(coords);
			downloadData(coords); // Downloads coordinates in-browser.
		};

		fetchData();
	}, []);

	*/

	///////////////////////
	// Google Map Props ///////////////////////////////////////////
	// Markers broken in React 18, so Zoom & Drag are disabled ///
	/////////////////////////////////////////////////////////////
	const defaultProps = {
		center: {
			lat: 33.481557,
			lng: -81.994929,
		},
		zoom: 16,
	};

	const mapOptions = {
		styles: [
			{
				featureType: "all",
				stylers: [{ saturation: -100 }, { lightness: 50 }],
			},
		],
		disableDefaultUI: true,
		draggable: false,
		clickableIcons: false,
	};

	const [locationHovered, setLocationHovered] = useState(null);

	const handleMouseEnter = (address) => {
		setLocationHovered(address);
	};

	const handleMouseLeave = () => {
		setLocationHovered(null);
	};

	// useEffect(() => {
	// 	console.log("locationHovered has changed:", locationHovered);
	// }, [locationHovered]);

	return (
		<>
			<section id="map-module">
				<div id="locations-container">
					<div id="locations-balancer">
						<div id="locations">
							{locationData.locations.map((location) => (
								<div
									className={`single-location ${
										locationHovered === location.address ? "highlight" : ""
									}`}
									onMouseEnter={() => handleMouseEnter(location.address)}
									onMouseLeave={handleMouseLeave}
									key={location.address}
								>
									<div className="image-container">
										<span className="status">{location.status}</span>
										<img
											src={locationImagePath + location.address + ".jpg"}
											alt={location.address}
										/>
									</div>
									<div className="info-container">
										<div className="status-container">
											<span className="status">{location.status}</span>
										</div>
										<p>{location.address}</p>
										{location.status !== "owned" && (
											<a
												className="plat"
												href={locationPlatPath + location.address + ".pdf"}
												target="_blank"
												rel="noopener noreferrer"
											>
												View Plat
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div id="map-container">
					<GoogleMapReact
						bootstrapURLKeys={{ key: mapsKey }}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						options={mapOptions}
					>
						{locationData.locations.map((coord) => (
							<Marker
								key={coord.lat}
								lat={coord.lat}
								lng={coord.lng}
								isHovered={locationHovered === coord.address}
								onMouseEnter={() => handleMouseEnter(coord.address)}
								onMouseLeave={handleMouseLeave}
							/>
						))}
					</GoogleMapReact>
				</div>
			</section>
		</>
	);
};

export default Map;
