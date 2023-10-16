import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./splash.styles.scss";

const Splash = () => {
	// Scrolling image backgrounds
	useEffect(() => {
		const firstCopyLeft = document.getElementById("first-copy-left");
		const secondCopyLeft = document.getElementById("second-copy-left");
		const firstCopyRight = document.getElementById("first-copy-right");
		const secondCopyRight = document.getElementById("second-copy-right");
		const firstCopyMobile = document.getElementById("first-copy-mobile");
		const secondCopyMobile = document.getElementById("second-copy-mobile");

		let scrollSpeed = 0.2;
		let firstPos = 0;
		let secondPos = -100;

		const animateScroll = () => {
			firstPos += scrollSpeed;
			secondPos += scrollSpeed;

			if (firstPos >= 100) {
				firstPos = secondPos - 100;
			}

			if (secondPos >= 100) {
				secondPos = firstPos - 100;
			}

			firstCopyLeft.style.transform = `translateY(${firstPos}%)`;
			secondCopyLeft.style.transform = `translateY(${secondPos}%)`;
			firstCopyRight.style.transform = `translateY(${firstPos}%)`;
			secondCopyRight.style.transform = `translateY(${secondPos}%)`;
			firstCopyMobile.style.transform = `translateX(${firstPos}%)`;
			secondCopyMobile.style.transform = `translateX(${secondPos}%)`;

			requestAnimationFrame(animateScroll);
		};

		animateScroll();

		// Cleanup function to stop animation if component unmounts
		return () => {
			cancelAnimationFrame(animateScroll);
		};
	}, []);

	return (
		<>
			<main id="splash-container" className="get-scrolled-kid">
				<div id="splash-background-mobile">
					<div id="first-copy-mobile">
						<div id="image-one-mobile" className="bg-image center"></div>
						<div id="image-two-mobile" className="bg-image center"></div>
						<div id="image-three-mobile" className="bg-image center"></div>
					</div>
					<div id="second-copy-mobile">
						<div id="image-four-mobile" className="bg-image center"></div>
						<div id="image-five-mobile" className="bg-image center"></div>
						<div id="image-six-mobile" className="bg-image center"></div>
					</div>
				</div>
				<div id="splash">
					<div id="splash-content">
						<h1>
							Revitalizing Harrisburg,
							<br className="break" /> One Block At a Time
						</h1>
						<p>
							Through colunteers and donations, we create afforadable home
							ownership opportunities where abandoned homes and vacant lots once
							stood.
						</p>
						<div id="splash-button-container">
							<Link to="get-involved" className="button white">
								View Our Projects
							</Link>
							<Link to="about" className="button red">
								Learn More
							</Link>
						</div>
					</div>
				</div>
				<div id="splash-background-desktop">
					<div id="left-container">
						<div id="first-copy-left" className="first-copy">
							<div id="left-image-one" className="bg-image left"></div>
							<div id="left-image-two" className="bg-image left"></div>
						</div>
						<div id="second-copy-left" className="second-copy">
							<div id="left-image-three" className="bg-image left"></div>
							<div id="left-image-four" className="bg-image left"></div>
						</div>
					</div>
					<div id="center-container"></div>
					<div id="right-container">
						<div id="first-copy-right" className="first-copy">
							<div id="right-image-one" className="bg-image right"></div>
							<div id="right-image-two" className="bg-image right"></div>
							<div id="right-image-three" className="bg-image right"></div>
							<div id="right-image-four" className="bg-image right"></div>
							<div id="right-image-five" className="bg-image right"></div>
						</div>
						<div id="second-copy-right" className="second-copy">
							<div id="right-image-six" className="bg-image right"></div>
							<div id="right-image-seven" className="bg-image right"></div>
							<div id="right-image-eight" className="bg-image right"></div>
							<div id="right-image-nine" className="bg-image right"></div>
							<div id="right-image-ten" className="bg-image right"></div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Splash;
