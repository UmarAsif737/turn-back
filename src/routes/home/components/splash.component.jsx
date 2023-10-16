import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./splash.styles.scss";

const Splash = () => {
	// Woah now, can't manipulate the DOM directly!
	const firstCopyLeftRef = useRef(null);
	const secondCopyLeftRef = useRef(null);
	const firstCopyRightRef = useRef(null);
	const secondCopyRightRef = useRef(null);
	const firstCopyMobileRef = useRef(null);
	const secondCopyMobileRef = useRef(null);
	// Scrolling image backgrounds
	useEffect(() => {
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

			firstCopyLeftRef.current.style.transform = `translateY(${firstPos}%)`;
			secondCopyLeftRef.current.style.transform = `translateY(${secondPos}%)`;
			firstCopyRightRef.current.style.transform = `translateY(${firstPos}%)`;
			secondCopyRightRef.current.style.transform = `translateY(${secondPos}%)`;
			firstCopyMobileRef.current.style.transform = `translateX(${firstPos}%)`;
			secondCopyMobileRef.current.style.transform = `translateX(${secondPos}%)`;

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
					<div id="first-copy-mobile" ref={firstCopyMobileRef}>
						<div id="image-one-mobile" className="bg-image center"></div>
						<div id="image-two-mobile" className="bg-image center"></div>
						<div id="image-three-mobile" className="bg-image center"></div>
					</div>
					<div id="second-copy-mobile" ref={secondCopyMobileRef}>
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
						<div
							id="first-copy-left"
							className="first-copy"
							ref={firstCopyLeftRef}
						>
							<div id="left-image-one" className="bg-image left"></div>
							<div id="left-image-two" className="bg-image left"></div>
						</div>
						<div
							id="second-copy-left"
							className="second-copy"
							ref={secondCopyLeftRef}
						>
							<div id="left-image-three" className="bg-image left"></div>
							<div id="left-image-four" className="bg-image left"></div>
						</div>
					</div>
					<div id="center-container"></div>
					<div id="right-container">
						<div
							id="first-copy-right"
							className="first-copy"
							ref={firstCopyRightRef}
						>
							<div id="right-image-one" className="bg-image right"></div>
							<div id="right-image-two" className="bg-image right"></div>
							<div id="right-image-three" className="bg-image right"></div>
							<div id="right-image-four" className="bg-image right"></div>
							<div id="right-image-five" className="bg-image right"></div>
						</div>
						<div
							id="second-copy-right"
							className="second-copy"
							ref={secondCopyRightRef}
						>
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
