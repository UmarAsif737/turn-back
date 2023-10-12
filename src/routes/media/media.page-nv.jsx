import { useState, useRef } from "react";
import Single from "./components/single/single.component";
import mediaData from "./components/single/media.data.json";
import "./media.styles.scss";

const Media = () => {
  async function loadImages(folder) {
    const imagesModule = await import(`./components/single/images/${folder}`);
    return Object.values(imagesModule);
  }

  //handle lightbox
  const [folder, setFolder] = useState("");
  const [images, setImages] = useState([]);

  const [showLightbox, setShowLightbox] = useState(false);

  const handleOpen = async (media) => {
    setFolder(media.folder);
    const newImages = await loadImages(media.folder);
    setImages(newImages);
    setShowLightbox(true);
  };

  const handleClose = () => {
    setImages([]);
    setCurrentIndex(0);
    setShowLightbox(false);
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
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section id="media-section">
        <div id="media-container" className="container">
          {mediaData.map((media) => (
            <Single
              key={media.title}
              image={images[0]}
              title={media.title}
              date={media.date}
              onClick={() => handleOpen(media)}
            />
          ))}
        </div>

        <section
          id="lightbox"
          style={{ display: showLightbox ? "flex" : "none" }}
        >
          <div id="lightbox-container">
            <div id="images-container">
              <div id="image">
                <div id="nav-arrows">
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
                </div>
                <div id="single-image-container">
                  <img src={images[0]} alt={images[currentIndex]} />
                  <button onClick={handleClose}>
                    <i className="fa-sharp fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <div id="images">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={img}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Media;
