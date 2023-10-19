//import { useRef, useState } from "react";
import MissionImage from "../../assets/our-mission.jpg";
import Story from "./components/story/story.component";
import storyData from "./components/story/story.data.json";
import Board from "./components/board/board.component";
import boardData from "./components/board/board.json";
import CTA from "../../components/cta/cta.component";
import "./about.styles.scss";

const About = () => {
	// Dragging for the horizontal scroller (stories)

	// const [isDragging, setIsDragging] = useState(false);
	// const containerRef = useRef(null);
	// let startPos = 0;

	// const onMouseDown = (e) => {
	// 	setIsDragging(true);
	// 	startPos = e.clientX;
	// 	containerRef.current.style.cursor = "grabbing";
	// };

	// const onMouseMove = (e) => {
	// 	if (!isDragging) return;
	// 	const dx = startPos - e.clientX;
	// 	containerRef.current.scrollLeft += dx;
	// 	startPos = e.clientX;
	// };

	// const onMouseUp = () => {
	// 	setIsDragging(false);
	// 	containerRef.current.style.cursor = "grab";
	// };

	// Image paths
	const storyImagePath = "./about-story-images/";
	const boardImagePath = "./about-board-images/";

	// Read more
	let isAccordionOpen = false;

	const accordion = () => {
		const hiddenText = document.getElementById("read-more");
		const accordionButton = document.getElementById("accordion-button");
		const articleContainer = document.getElementById("about-history");

		isAccordionOpen = !isAccordionOpen;

		accordionButton.innerText = isAccordionOpen ? "SHOW LESS -" : "READ MORE +";
		hiddenText.classList[isAccordionOpen ? "add" : "remove"]("open-accordion");

		if (!isAccordionOpen && articleContainer) {
			articleContainer.scrollIntoView({ behavior: "smooth" });
		}
	};

	// change document.gets to useRefs

	return (
		<>
			<section id="about-impact">
				<div className="container">
					<div id="heading-and-text">
						<div className="heading-container">
							<span className="subheading">Our Impact</span>
							<h2 className="heading">
								Creating a Neighborhood Where Everyone Wants to Live
							</h2>
						</div>
						<div className="text-container">
							<span className="subheading">Our Impact</span>
							<p>
								In revitalizing, we strengthen our entire community. In
								Augusta's Comprehensive Plan, 4 high priority needs were
								identified.
							</p>
						</div>
					</div>

					<div
						id="stories-scroller"
						// ref={containerRef}
						// onMouseDown={onMouseDown}
						// onMouseMove={onMouseMove}
						// onMouseUp={onMouseUp}
						// onMouseLeave={onMouseUp}
					>
						<div id="stories-container">
							{storyData.map((story) => (
								<Story
									key={story.id}
									id={story.id}
									image={storyImagePath + story.image}
									title={story.title}
									content={story.content}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<main id="about-history">
				<div id="history-container" className="container">
					<div className="heading-container">
						<span className="subheading">Lorem Ipsum</span>
						<h2 className="heading">Our History</h2>
					</div>
					<div id="article-container">
						<article id="main-one">
							<p>
								Founded in the early 18th century and now designated as a
								National Historic District, Harrisburg is named for Ezekiel
								Harris, a prominent tobacco merchant who built his home along a
								trade route now known as Broad Street. This “mill village” once
								housed workers of the historic King, Sibley, Enterprise, and
								Sutherland Mills that line the banks of the Augusta Canal.
								Unfortunately, with the closure of the mills came a decline in
								upkeep for the homes, businesses, churches, and schools in the
								neighborhood.
							</p>
							<div id="read-more">
								<p>
									However, Harrisburg’s proximity to downtown Augusta, the
									medical district, Augusta University, Summerville, the Augusta
									Canal Heritage Area, and the Savannah River make it an area
									ripe for growth and revitalization. The construction of the
									Kroc Center and US Army Cyber Center for Excellence are just
									some of the recent additions to positively impact Harrisburg.
								</p>
								<p>
									Founded in 2010, Turn Back the Block, originally known as the
									Fuller Center for Housing, was created by community leaders -
									Clay Boardman and Anne Catherine Murray, among others, who
									envisioned returning the Harrisburg neighborhood to its former
									glory.
								</p>
								<p>
									To move from the drawing board to the construction site, the
									founding members utilized the Fuller Center for Housing model
									and a steady volunteer supply, beginning with the recruitment
									of board members and committee chairs. Armed with a
									block-by-block plan to renew the neighborhood, volunteers
									began rehabilitation of a block of donated houses along Broad
									Street.
								</p>
								<p>
									Turn Back the Block’s work over the last decade has been in
									high-visible areas of Harrisburg. To date, we have established
									9 homeowners, 7 newly constructed homes, 8 renovated homes, a
									centrally-located renovated office/warehouse, and maintain
									over 20 vacant lots.
								</p>
								<p className="main-two">
									We believe homeownership to be the solution to the blight and
									crime created by uninvested landlords and absentee property
									owners. Homeownership is a reliable way to build economic
									mobility and stability for the families of Harrisburg. In
									building self-invested communities, Turn Back the Block’s
									homeowners help instill a sense of pride and dedication that
									is shared by their neighbors.
								</p>
								<p className="main-two">
									Turn Back the Block continues to be a catalyst to community
									revitalization in Augusta by creating homeownership in
									Harrisburg.
								</p>
							</div>
							<button id="accordion-button" onClick={accordion}>
								Read More +
							</button>
						</article>
						<div id="mission-container">
							<img src={MissionImage} alt="Group Photo" />
							<div id="our-mission">
								<div id="subheading-container">
									<span className="subheading">Our Mission</span>
									<div className="inline-line"></div>
								</div>
								<p>
									Turn Back the Block is a faith-based, nonprofit organization
									whose mission is to help revitalize the Harrisburg
									neighborhood. Turn Back the Block believes that home ownership
									is a catalyst for transition in the community and works
									block-to-block, creating affordable home ownership where
									vacant lots and once abandoned homes stood.
								</p>
							</div>
							<p className="main-two">
								We believe homeownership to be the solution to the blight and
								crime created by uninvested landlords and absentee property
								owners. Homeownership is a reliable way to build economic
								mobility and stability for the families of Harrisburg. In
								building self-invested communities, Turn Back the Block’s
								homeowners help instill a sense of pride and dedication that is
								shared by their neighbors.
							</p>
							<p className="main-two">
								Turn Back the Block continues to be a catalyst to community
								revitalization in Augusta by creating homeownership in
								Harrisburg.
							</p>
						</div>
					</div>
				</div>
			</main>
			<section id="about-board">
				<div className="container">
					<div className="heading-container">
						<span className="subheading">Lorem Ipsum</span>
						<h2 className="heading">Meet Our Board</h2>
					</div>
					<div id="board-container">
						{boardData.map((member) => (
							<Board
								key={member.name}
								image={boardImagePath + member.image}
								name={member.name}
								titles={member.titles}
								about={member.about}
							/>
						))}
					</div>
				</div>
			</section>
			<CTA />
		</>
	);
};

export default About;
