import React, { useEffect, useState, useRef } from "react";
import GoogleMap from "google-maps-react-markers";
import locationData from "./locations/locations.json";
import "./map.styles.scss";

const Map = () => {
	///////////////////
	// Declarations //
	/////////////////

	// Paths
	const locationImagePath = "src/components/map/locations/images/";
	const locationPlatPath = "src/components/map/locations/plats/";

	// Status color and length for desktop
	const ownedStatus = locationData.locations
		.filter((location) => location.status === "owned")
		.length.toString();
	const soldStatus = locationData.locations
		.filter((location) => location.status === "sold")
		.length.toString();
	const constructionStatus = locationData.locations
		.filter((location) => location.status === "construction")
		.length.toString();

	const StatusMarker = ({ status }) => {
		let statusColor;
		if (status === "owned") {
			statusColor = "#a9accd";
		} else if (status === "sold") {
			statusColor = "#7e6c2a";
		} else {
			statusColor = "#ec1d25";
		}

		const statusMarkerStyle = {
			backgroundColor: statusColor,
		};

		return <div className="status-marker" style={statusMarkerStyle}></div>;
	};

	// Status color for mobile
	const StatusMarkerMobile = ({ status }) => {
		let statusColor;
		if (status === "owned") {
			statusColor = "#a9accd";
		} else if (status === "sold") {
			statusColor = "#7e6c2a";
		} else {
			statusColor = "#ec1d25";
		}

		const statusMarkerMobileStyle = {
			backgroundColor: statusColor,
		};

		return (
			<span className="status" style={statusMarkerMobileStyle}>
				{status}
			</span>
		);
	};

	//////////////////
	// Google Maps //
	////////////////

	const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
	const mapRef = useRef(null);
	const [mapReady, setMapReady] = useState(false);

	/**
	 * @description This function is called when the map is ready
	 * @param {Object} map - reference to the map instance
	 * @param {Object} maps - reference to the maps library
	 */

	const onGoogleApiLoaded = ({ map, maps }) => {
		mapRef.current = map;
		setMapReady(true);
	};

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
		clickableIcons: false,
	};

	///////////////////////////
	// Map Marker Component //
	/////////////////////////

	const Marker = React.forwardRef(
		({ isHovered, onMouseEnter, onMouseLeave, status }, ref) => {
			// hardcoded colors from _global.styles.scss
			let markerColor;
			if (status === "owned") {
				markerColor = "#a9accd";
			} else if (status === "sold") {
				markerColor = "#7e6c2a";
			} else {
				markerColor = "#ec1d25";
			}

			const markerStyle = {
				width: isHovered ? "40px" : "20px",
				height: isHovered ? "40px" : "20px",
				borderRadius: "100px",
				backgroundColor: markerColor,
				cursor: "pointer",
				position: "absolute",
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)",
			};

			return (
				<div
					ref={ref}
					style={markerStyle}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				></div>
			);
		}
	);

	/////////////////
	// Map Events //
	///////////////

	const [locationHovered, setLocationHovered] = useState(null);
	const markerRef = useRef([]);

	const handleMouseEnter = (address, lat, lng, index) => {
		setLocationHovered(address);
		mapRef.current.panTo({ lat: lat, lng: lng });

		const markerElement = markerRef.current[index];
		const parentDiv = markerElement ? markerElement.parentNode : null;

		if (parentDiv) {
			parentDiv.style.zIndex = "3";
		}
	};

	const handleMouseLeave = () => {
		setLocationHovered(null);

		markerRef.current.forEach((el) => {
			const parentDiv = el ? el.parentNode : null;
			if (parentDiv) {
				parentDiv.style.zIndex = "1";
			}
		});
	};

	const handleMouseEnterMarker = (address, event) => {
		setLocationHovered(address);

		const markerElement = event.target;
		const parentDiv = markerElement.parentNode;

		if (parentDiv) {
			parentDiv.style.zIndex = "3";
		}
	};

	const handleMouseLeaveMarker = (event) => {
		setLocationHovered(null);

		const markerElement = event.target;
		const parentDiv = markerElement.parentNode;

		if (parentDiv) {
			parentDiv.style.zIndex = "1";
		}
	};

	/////////////
	// Return //
	///////////

	return (
		<>
			<section id="map-module">
				<div id="locations-container">
					<div id="locations-balancer">
						<div id="locations">
							{mapReady &&
								locationData.locations.map((location, index) => (
									<div
										className={`single-location ${
											locationHovered === location.address ? "highlight" : ""
										}`}
										onMouseEnter={() =>
											handleMouseEnter(
												location.address,
												location.lat,
												location.lng,
												index
											)
										}
										onMouseLeave={handleMouseLeave}
										key={location.address}
									>
										<div className="image-container">
											<StatusMarkerMobile status={location.status} />
											<img
												src={locationImagePath + location.address + ".jpg"}
												alt={location.address}
											/>
										</div>
										<div className="info-container">
											<div className="status-container">
												<StatusMarker status={location.status} />
											</div>
											<div className="address-container">
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
									</div>
								))}
						</div>
					</div>
				</div>
				<div id="map-container">
					<GoogleMap
						apiKey={mapsKey}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						options={mapOptions}
						onGoogleApiLoaded={onGoogleApiLoaded}
					>
						{mapReady &&
							locationData.locations.map((coord, index) => (
								<Marker
									key={coord.lat}
									lat={coord.lat}
									lng={coord.lng}
									status={coord.status}
									ref={(el) => (markerRef.current[index] = el)}
									isHovered={locationHovered === coord.address}
									onMouseEnter={(e) => handleMouseEnterMarker(coord.address, e)}
									onMouseLeave={(e) => handleMouseLeaveMarker(e)}
								/>
							))}
					</GoogleMap>
					<div id="key-bar">
						<div className="key-container">
							<div className="key purple"></div>
							<span className="count">
								{"Owned "}
								<span>{`(${ownedStatus})`}</span>
							</span>
						</div>
						<div className="key-container">
							<div className="key brown"></div>
							<span className="count">
								{"Sold "}
								<span>{`(${soldStatus})`}</span>
							</span>
						</div>
						<div className="key-container">
							<div className="key red"></div>
							<span className="count">
								{"Construction Project "}
								<span>{`(${constructionStatus})`}</span>
							</span>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Map;
