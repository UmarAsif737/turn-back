import { useState, useRef, useEffect } from "react";
import CTA from "../../components/cta/cta.component";
import Single from "./components/single/single.component";
import mediaData from "./components/single/media.data.json";
import mediaImageMap from "../../../mediaImageMap.json";
import "./media.styles.scss";

const Media = () => {
	// image path
	const staticImagePath = "./media-page-images/";

	//handle lightbox
	const [images, setImages] = useState([]);
	const [folder, setFolder] = useState("");
	const [showLightbox, setShowLightbox] = useState(false);
	const lightbox = useRef(null);
	const hideCTA = useRef(null);
	const handleOpen = (media) => {
		setFolder(media.folder);
		const newImages = mediaImageMap[media.folder];
		setImages(newImages);
		setShowLightbox(true);
		const ctaElement = hideCTA.current;
		ctaElement.classList.add("hide-cta");
	};
	const handleClose = () => {
		setImages([]);
		setCurrentIndex(0);
		setShowLightbox(false);
		const ctaElement = hideCTA.current;
		ctaElement.classList.remove("hide-cta");
	};
	useEffect(() => {
		if (showLightbox) {
			const scrollToLightbox = lightbox.current;
			scrollToLightbox.scrollIntoView({
				behavior: "smooth",
			});
		}
	}, [showLightbox]);

	// Handle image indexing and scrolling
	const [currentIndex, setCurrentIndex] = useState(0);
	// const handleNext = () => {
	// 	setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	// };
	// const handlePrev = () => {
	// 	setCurrentIndex(
	// 		(prevIndex) => (prevIndex - 1 + images.length) % images.length
	// 	);
	// };
	const handleImageClick = (index) => {
		setCurrentIndex(index);
	};

	const imageRow = useRef(null);

	const handleScrollRight = () => {
		const container = imageRow.current;
		container.scrollBy({ left: 200, behavior: "smooth" });
	};

	const handleScrollLeft = () => {
		const container = imageRow.current;
		container.scrollBy({ left: -200, behavior: "smooth" });
	};

	return (
		<>
			<section id="media-section">
				<div
					id="media-container"
					className="container"
					style={{ display: showLightbox ? "none" : "grid" }}
				>
					{mediaData
						.sort((a, b) => {
							const dateA = new Date(a.date.replace(" ", " 1, "));
							const dateB = new Date(b.date.replace(" ", " 1, "));
							return dateB - dateA; // for descending order
						})
						.map((media) => (
							<Single
								key={media.title}
								image={`${staticImagePath}${media.folder}/${
									mediaImageMap[media.folder][0]
								}`}
								title={media.title}
								date={media.date}
								onClick={() => handleOpen(media)}
							/>
						))}
				</div>

				<section
					id="lightbox"
					style={{ display: showLightbox ? "flex" : "none" }}
					ref={lightbox}
				>
					<div id="lightbox-container">
						<div id="images-container">
							<div id="image">
								<div id="single-image-container">
									<img
										src={`${staticImagePath}${folder}/${images[currentIndex]}`}
										alt={images[currentIndex]}
									/>

									<button onClick={handleClose}>
										<i className="fa-sharp fa-solid fa-xmark"></i>
									</button>
								</div>
							</div>
							<div id="images">
								<div id="gradient"></div>
								<div id="left-arrow">
									<i
										className="fa-regular fa-arrow-left"
										role="button"
										onClick={handleScrollLeft}
									></i>
								</div>
								<div id="right-arrow">
									<i
										className="fa-regular fa-arrow-right"
										role="button"
										onClick={handleScrollRight}
									></i>
								</div>
								<div id="image-row-container" ref={imageRow}>
									{images.map((img, index) => (
										<img
											key={index}
											src={`${staticImagePath}${folder}/${img}`}
											alt={img}
											onClick={() => handleImageClick(index)}
											loading="lazy"
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
			<section id="hide-cta" ref={hideCTA}>
				<CTA />
			</section>
		</>
	);
};

export default Media;
