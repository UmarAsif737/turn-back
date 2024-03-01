import { useState } from "react";
import OurMission from "../../assets/our-mission.jpg";
import conductForm from "../../assets/Volunteer Conduct Form.pdf";
import "./get-involved.styles.scss";
import EventLabel from "./eventLabel";

const GetInvolved = ({ events }) => {
  const [heard, setHeard] = useState("");
  const handleInputChange = (e) => {
    setHeard(e.target.value);
  };
  return (
    <>
      <section id="get-involved-section">
        <div id="help-us" className="container">
          <div id="call-to-action">
            <div id="background-image"></div>
            <div id="donate-today">
              <h2>Help Us Turn Back the Block</h2>
              <div className="link-container">
                <i className="fa-regular fa-arrow-right link-icon"></i>
                <a href="#" className="cv-button">
                  Donate Today
                </a>
              </div>
            </div>
          </div>
        </div>
        <main id="volunteer" className="container">
          <img src={OurMission} alt="Turn Back The Block Volunteers" />
          <div id="heading-container">
            <h2>Volunteer With Us</h2>
            <div className="inline-line"></div>
          </div>
          <div id="content-container">
            <div id="image-and-schedule">
              <img src={OurMission} alt="Turn Back The Block Volunteers" />
              <div id="schedule-container">
                <h3>Upcoming Events</h3>
                <div id="schedule">
                  {events?.map((event, index) => (
                    <EventLabel
                      key={index}
                      image={event?.attributes.image.data.attributes.url}
                      title={event?.attributes.title}
                      description={event?.attributes.description}
                      startingTime={event?.attributes.startingTime}
                      endingTime={event?.attributes.endingTime}
                      date={event?.attributes.date}
                      address={event?.attributes.address}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div id="form-container">
              <p>
                Monthly Block Parties, Litter & Tire pick-up, Community Events,
                Internship Opportunities and more — sign up below for more
                information on how you can help us create change:
              </p>
              <form name="volunteer-form" method="POST">
                <input type="hidden" name="form-name" value="volunteer-form" />
                <label>
                  Applicant Full Name<span className="required">*</span>
                  <input type="text" name="primary-name" required />
                </label>
                <label>
                  Guardian Full Name
                  <span className="thin">
                    (If Applicant is Under 18 yrs old)
                  </span>
                  <input type="text" name="secondary-name" />
                </label>
                <label>
                  Street Address<span className="required">*</span>
                  <input type="text" name="address" required />
                </label>
                <label>
                  City<span className="required">*</span>
                  <input type="text" name="city" required />
                </label>
                <label>
                  State<span className="required">*</span>
                  <input
                    type="text"
                    name="state"
                    defaultValue="GA"
                    minLength="2"
                    maxLength="2"
                    required
                  />
                </label>
                <label>
                  Zipcode<span className="required">*</span>
                  <input
                    type="text"
                    name="zipcode"
                    pattern="[0-9]{5}"
                    minLength="5"
                    maxLength="5"
                    required
                  />
                </label>
                <label>
                  Phone Number<span className="required">*</span>
                  <input type="tel" name="phone" required />
                </label>
                <label>
                  Email Address<span className="required">*</span>
                  <input type="email" name="email" required />
                </label>
                <div className="checkbox-container">
                  <input type="checkbox" id="previously" />
                  <label htmlFor="previously">
                    I have volunteered with Turn Back the Block
                  </label>
                </div>
                <div className="checkbox-container">
                  <input type="checkbox" id="understand" />
                  <label htmlFor="understand">
                    I have read and understand the{" "}
                    <a
                      href={conductForm}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Volunteer Conduct Agreement
                    </a>{" "}
                    and agree to abide by it<span className="required">*</span>
                  </label>
                </div>

                <label>
                  How did you hear about the program?
                  <span className="required">*</span>
                  <select
                    name="hear-about"
                    required
                    onChange={handleInputChange}
                  >
                    <option>Website</option>
                    <option>Social Media</option>
                    <option>Signage</option>
                    <option>Friend / Family</option>
                  </select>
                </label>
                {heard === "Friend / Family" && (
                  <label id="referral">
                    Friend's or Family's name:
                    <input type="text" name="referrer" />
                  </label>
                )}

                <input
                  className="button red"
                  type="submit"
                  value="Sign Up"
                  role="button"
                />
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default GetInvolved;
