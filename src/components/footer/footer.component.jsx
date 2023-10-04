import { Link } from "react-router-dom";
import FooterLogo from "../../assets/Turn-Back-The-Block-Logo-Footer.png";
import "./footer.styles.scss";

const Footer = () => {
	return (
		<>
			<footer>
				<section id="footer-section">
					<div id="footer-container">
						<div id="footer-top">
							<div id="footer-left" className="footer-menu">
								<div id="learn-more">
									<h3>Learn More</h3>
									<ul>
										<li>
											<Link to="about">About</Link>
										</li>
										<li>
											<Link to="projects">Projects</Link>
										</li>
										<li>
											<Link to="apply">Apply to Own</Link>
										</li>
										<li id="get-involved-mobile">
											<Link to="get-involved">Get Involved</Link>
										</li>
										<li>
											<Link to="media">Photos</Link>
										</li>
										
									</ul>
								</div>
								<div id="get-involved" className="footer-menu">
									<h3>Get Involved</h3>
									<ul>
										<li>
											<Link to="get-involved">Make a Donation</Link>
										</li>
										<li>
											<Link to="get-involved">Volunteer Opportunities</Link>
										</li>
										<li>
											<Link to="get-involved">Internships</Link>
										</li>
									</ul>
								</div>
							</div>
							<div id="footer-right">
							<Link to="/" id="footer-logo-link"><img src={FooterLogo} alt="logo" /></Link>
								
								<div id="contact-information">
									<a
										href="https://www.google.com/maps/place/1924+Battle+Row,+Augusta,+GA+30904/@33.482559,-81.9985294,17z"
										target="_blank"
										rel="noopener noreferrer"
									>
										1924 Battle Row <br /> Augusta, GA 30904
									</a>

									<a id="footer-phone" href="tel:(706) 262-4000">(706) 262-4000</a>

									<div id="footer-social-icons">
										<a
											href="https://www.instagram.com/turnbacktheblock/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fa-brands fa-square-instagram"></i>
										</a>
										<a
											href="https://www.facebook.com/TurnBacktheBlock/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fa-brands fa-square-facebook"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="footer-bottom">
						<div id="footer-bottom-content">
							<a
								href="https://thekru.rocks/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="kruhu" alt="Website built by The Kru" />
							</a>

							<p>Turn Back The Block is a 501c3 organization.</p>
						</div>
					</div>
				</section>
			</footer>
		</>
	);
};

export default Footer;
