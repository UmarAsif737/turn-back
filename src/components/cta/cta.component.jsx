import { Link } from "react-router-dom";
import "./cta.styles.scss";

const CTA = () => {
	const donateLink =
		"https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=NESTQKKMSGQHA";
	return (
		<>
			<section id="cta-section">
				<div id="cta-container">
					<h2>
						Help Us Turn <br className="mobile-breaker" /> Back the Block
					</h2>
					<div id="cta-buttons">
						<a
							// href={donateLink}
							// target="_blank"
							// rel="noopener noreferrer"
							href="#"
							className="button white cv-button"
						>
							Donate Today
						</a>
						<Link to="../get-involved" className="button transparent">
							Volunteer With Us
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default CTA;
