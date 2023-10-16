import { useState, useRef, useEffect } from "react";
import Single from "./components/single/single.component";
import mediaData from "./components/single/media.data.json";
import mediaImageMap from "../../../mediaImageMap.json";
import "./media.styles.scss";

const Media = () => {
	// image path
	const mediaImagePath = "src/routes/media/components/single/images/";
	const staticImagePath = "./media-page-images/";
	// Loop through each folder and its images to require them
	// Object.keys(mediaImageMap).forEach((folder) => {
	// 	mediaImageMap[folder].forEach((image) => {
	// 		try {
	// 			// Dynamically require the image so Vite includes it in the build
	// 			const dummy = require(`${mediaImagePath}${folder}/${image}`);
	// 		} catch (error) {
	// 			console.error(`Failed to require image ${folder}/${image}: ${error}`);
	// 		}
	// 	});
	// });

	//handle lightbox
	const [images, setImages] = useState([]);
	const [folder, setFolder] = useState("");
	const [showLightbox, setShowLightbox] = useState(false);
	const lightbox = useRef(null);
	const handleOpen = (media) => {
		setFolder(media.folder);
		const newImages = mediaImageMap[media.folder];
		setImages(newImages);
		setShowLightbox(true);
	};
	const handleClose = () => {
		setImages([]);
		setCurrentIndex(0);
		setShowLightbox(false);
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
					{mediaData.map((media) => (
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
								{/* <div id="nav-arrows">
									<i
										className="fa-regular fa-arrow-left"
										role="button"
										onClick={handlePrev}
									></i>
									<i
										className="fa-regular fa-arrow-right"
										role="button"
										onClick={handleNext}
									></i>
								</div> */}
								<div id="single-image-container">
									{/* <div id="test">
                    <img
                      src={`${mediaImagePath}${folder}/${images[currentIndex]}`}
                      alt={images[currentIndex]}
                    />
                  </div> */}
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
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default Media;
