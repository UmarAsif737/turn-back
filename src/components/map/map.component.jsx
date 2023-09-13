import locationData from "./locations/locations.json";
import "./map.styles.scss";

const Map = () => {
	const locationImagePath = "src/components/map/locations/images/";
	const locationPlatPath = "src/components/map/locations/plats/";

	return (
		<>
			<section id="map-module">
				<div id="locations-container">
					<div id="locations-balancer">
						<div id="locations">
							{locationData.locations.map((location) => (
								<div className="single-location" key={location.id}>
									<div className="image-container">
										<span className="status">{location.status}</span>
										<img
											src={locationImagePath + location.image}
											alt={location.address}
										/>
									</div>
									<div className="info-container">
										<div className="status-container">
											<span className="status">{location.status}</span>
										</div>
										<p>{location.address}</p>
										<a
											href={locationPlatPath + location.plat}
											target="_blank"
											rel="noopener noreferrer"
										>
											View Plat
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div id="map-container">
					<div id="map">map</div>
				</div>
			</section>
		</>
	);
};

export default Map;
