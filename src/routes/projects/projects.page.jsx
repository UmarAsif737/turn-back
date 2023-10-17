import { useState } from "react";
import Map from "../../components/map/map.component";
import CTA from "../../components/cta/cta.component";
import BattleRow1980 from "./images/1980-Battle-Row.jpg";
import BattleRow2017_1 from "./images/2017-Battle-Row-1.jpg";
import BattleRow2017_2 from "./images/2017-Battle-Row-2.jpg";
import BattleRow2017_3 from "./images/2017-Battle-Row-3.jpg";
import "./projects.styles.scss";

const images = [BattleRow2017_1, BattleRow2017_2, BattleRow2017_3];

const Projects = () => {
	// Handle read more toggle
	let isAccordionOpen = false;

	const accordion = () => {
		const hiddenText = document.getElementById("read-more");
		const accordionButton = document.getElementById("accordion-button");
		const articleContainer = document.getElementById("project-one");

		isAccordionOpen = !isAccordionOpen;

		accordionButton.innerText = isAccordionOpen ? "SHOW LESS -" : "READ MORE +";
		hiddenText.classList[isAccordionOpen ? "add" : "remove"]("open-accordion");

		if (!isAccordionOpen && articleContainer) {
			articleContainer.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Handle image indexing and scrolling
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	return (
		<>
			<section id="projects-section">
				<div id="projects-container">
					<p>
						Turn Back the Block operates with the generous support of
						volunteers, private contributions, grants, and partnerships. If you
						or your business is interested in making an in-kind, tax deductible
						gift of materials or service to one or both current projects, it
						will be greatly appreciated and efficiently utilized. Together we
						can change lives, fulfill dreams, and revitalize Harrisburg.
					</p>
					<div id="project-one" className="project">
						<div className="content-container">
							<div className="heading-container">
								<span className="subheading">2 Bedroom / 2 Bath</span>
								<h2 className="heading">1980 Battle Row</h2>
							</div>
							<p className="text-content">
								The structure at 1980 Battle Row was acquired in the Fall of
								2021 by the family of Mildred Bradshaw. For decades, Mildred and
								her family lived in the home at Battle Row and Metcalf in
								Harrisburg, therefore it is our intention and desire to honor
								Mildred and her family by renovating the house. Currently, 1980
								Battle Row is inhabitable with poor insulation, lack of plumbing
								and electrical continuity, and no central heating/air.
							</p>
							<div id="read-more">
								<p className="text-content">
									Phase 1 (Architectural Planning/Engineering) and Phase 2
									(Environmental studies/Asbestos Removal) have all been
									completed and kindly supported by the 2023 Community
									Foundation grant, as well as the volunteer labor of the FROGS
									(Faithful Retired Old Guys Serving). With volunteer labor, we
									were able to complete an interior demolition of the structure,
									"gutting" the interior to the studs. Next steps in the
									renovation process are needed to make 1980 Battle Row a home
									to a new family.
								</p>
							</div>
							<button id="accordion-button" onClick={accordion}>
								Read More +
							</button>
						</div>
						<div className="image-container">
							<div className="single-image">
								<img src={BattleRow1980} alt="House at 1980 Battle Row" />
							</div>
						</div>
					</div>
					<div id="project-two" className="project">
						<div className="content-container">
							<div className="heading-container">
								<span className="subheading">Two Single-Family Homes</span>
								<h2 className="heading">2017 Battle Row</h2>
							</div>
							<p className="text-content">
								Turn Back the Block has partnered with Newsome Homes and
								Construction to build 2017 Battle Row—a two-family home boasting
								1344 square feet of conditioned space and 522 feet (Unit A) and
								320 (Unit B) of porch space. To ensure a design which reflects
								the historic integrity of the neighborhood, we enlisted
								Harrisburg’s own Studio 3 Design Group, who created an exciting
								concept based upon an early 20th century Craftsman style
								bungalow.
							</p>
						</div>
						<div className="image-container">
							<div className="image-arrows">
								<div className="left-arrow">
									<i
										className="fa-regular fa-arrow-left"
										onClick={handlePrev}
									></i>
								</div>
								<div className="right-arrow">
									<i
										className="fa-regular fa-arrow-right"
										onClick={handleNext}
									></i>
								</div>
							</div>
							<div className="single-image">
								<img src={images[currentIndex]} alt="House on Battle Row" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<Map />
			<CTA />
		</>
	);
};

export default Projects;
