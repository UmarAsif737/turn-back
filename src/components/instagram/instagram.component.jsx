import "./instagram.styles.scss";

const Instagram = () => {
	return (
		<>
			<section id="instagram-section">
				<div id="instagram-container">
					<div id="instagram-text">
						<h3>
							Follow us{" "}
							<a
								href="https://www.instagram.com/turnbacktheblock/"
								target="_blank"
								rel="noopener noreferrer"
							>
								@turnbacktheblock
							</a>
						</h3>
						<div className="inline-line"></div>
					</div>
					<div id="instagram-feed"></div>
				</div>
			</section>
		</>
	);
};

export default Instagram;
