import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Splash from "./components/splash.component";
import Testimonials from "../../components/testimonials/testimonials.component";
import Map from "../../components/map/map.component";
import Instagram from "../../components/instagram/instagram.component";
import CTA from "../../components/cta/cta.component";
import whoImg from "./images/who-we-are.jpg";

import LadonnaImg from "./images/LaDonna-Doleman.jpg";
import "./home.styles.scss";
import SingleEvent from "./singleEvent";

const Home = ({ events, error, isLoading }) => {
  // Number animation
  const [startAnimation, setStartAnimation] = useState(false);
  const numberContainerRef = useRef(null);

  useEffect(() => {
    const getRootMargin = () => {
      return window.innerWidth <= 431 ? "-100px" : "-40% 0% -40% 0%";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: getRootMargin(),
        threshold: 0,
      }
    );

    if (numberContainerRef.current) {
      observer.observe(numberContainerRef.current);
    }
  }, []);

  useEffect(() => {
    if (startAnimation) {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        counter.innerText = "0";
        let target = +counter.getAttribute("data-target");
        let step = target / 500;

        let countIt = function () {
          let displayedCount = +counter.innerText;
          if (displayedCount < target) {
            counter.innerText = Math.ceil(displayedCount + step).toString();
            setTimeout(countIt, 50);
          } else {
            counter.innerText = target.toString();
          }
        };
        countIt();
      });
    }
  }, [startAnimation]);

  // Handle accordion
  let isAccordionOpen = false;
  const accordion = () => {
    const hiddenText = document.getElementById("ladonna-accordion");
    const accordionButton = document.getElementById("ladonna-accordion-button");
    isAccordionOpen = !isAccordionOpen;
    accordionButton.innerText = isAccordionOpen ? "SHOW LESS -" : "READ MORE +";
    hiddenText.classList[isAccordionOpen ? "add" : "remove"]("open-accordion");
  };

  return (
    <>
      <Splash />
      <section className="home-section">
        <div className="container">
          <div className="left-content">
            <div className="heading-container">
              <span className="subheading">Who We Are</span>
              <h2 className="heading">
                Building Pride, Communities, and Futures
              </h2>
            </div>
            <p className="text-content">
              Turn Back The Block is a catalyst in revitalizing the Harrisburg
              neighborhood through homeownership and the creation of quality
              housing. It is in promoting homeownership that we help change
              lives, provide stability, a sense of pride, and economic stability
              for homeowners.
            </p>
            <div className="link-container">
              <i className="fa-regular fa-arrow-right link-icon"></i>
              <Link to="get-involved">Discover Ways to Get Involved</Link>
            </div>
          </div>
          <div className="right-content">
            <img src={whoImg} alt={whoImg} />
          </div>
        </div>
      </section>
      <section className="home-section impact">
        <div className="container">
          <div className="heading-container">
            <span className="subheading">Our Impact</span>
            <h2 className="heading">Over the Past Decade</h2>
          </div>
          <div className="number-container" ref={numberContainerRef}>
            <div className="number">
              <span className="counter" data-target="24">
                0
              </span>
              <span className="subheading">
                Maintained lots ready for new construction
              </span>
            </div>
            <div className="number">
              <span className="counter" data-target="09">
                0
              </span>
              <span className="subheading">New homeowners added</span>
            </div>
            <div className="number">
              <span className="counter" data-target="08">
                0
              </span>
              <span className="subheading">Homes renovated</span>
            </div>
            <div className="number">
              <span className="counter" data-target="09">
                0
              </span>
              <span className="subheading">Homes constructed</span>
            </div>
            <div className="number">
              <span className="counter" data-target="01">
                0
              </span>
              <span className="subheading">
                Renovated office / warehouse space
              </span>
            </div>
          </div>
        </div>
      </section>

      {events?.map((event, index) => (
        <SingleEvent
          key={index}
          image={event?.attributes.image.data.attributes.url}
          title={event?.attributes.title}
          description={event?.attributes.description}
          startingTime={event?.attributes.startingTime}
          date={event?.attributes.date}
          address={event?.attributes.address}
        />
      ))}
      <Testimonials />
      <section className="home-section spotlight">
        <div className="container">
          <div className="left-content">
            <div className="heading-container">
              <span className="subheading">Spotlight Story</span>
              <h2 className="heading">Ladonna Doleman</h2>
            </div>
            <p className="text-content">
              In July 2020, Turn Back the Block welcomed Ladonna Doleman and her
              two sons to the Turn Back the Block family.{" "}
              <span id="ladonna-accordion">
                Ladonna worked hard as an applicant for nearly three years
                before purchasing her 3-bedroom/ 2-bathroom home through the
                Turn Back the Block program. Ladonna completed over 350 sweat
                equity hours, attended numerous financial counseling sessions
                working to repair her credit and create a family budget that set
                she and her boys on a road of savings. Homeownership for Ladonna
                means stability and has created economic mobility for she and
                her family.
              </span>
            </p>
            <button id="ladonna-accordion-button" onClick={accordion}>
              Read More +
            </button>
          </div>
          <div className="right-content">
            <video controls poster={LadonnaImg} preload="metadata">
              <source
                src="/Turn Back The Block - LaDonna.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <Map />
      <Instagram />
      <CTA />
    </>
  );
};

export default Home;
