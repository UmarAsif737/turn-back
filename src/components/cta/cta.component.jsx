import "./cta.styles.scss";

const CTA = () => {
	return (
		<>
			<section id="cta-section">
				<div id="cta-container">
					<h2>
						Help Us Turn <br className="mobile-breaker" /> Back the Block
					</h2>
					<div id="cta-buttons">
						<a className="button white">Donate Today</a>
						<a className="button transparent">Volunteer With Us</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default CTA;
