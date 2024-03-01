import React from "react";
import { Link } from "react-router-dom";

const SingleEvent = ({
  image,
  title,
  description,
  date,
  startingTime,
  endingTime,
  address,
}) => {
  function getOrdinalSuffix(date) {
    if (date > 3 && date < 21) return "th";
    switch (date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  // Function to format date and time
  function formatDateTime(dateString, timeString) {
    // Create a new Date object
    const date = new Date(dateString + "T" + timeString);

    // Options for date format
    const dateOptions = { weekday: "short", month: "short", day: "numeric" };
    // Format date
    let formattedDate = date.toLocaleDateString("en-US", dateOptions);

    // Append ordinal suffix to day
    const day = date.getDate();
    formattedDate = formattedDate.replace(
      day,
      `${day}${getOrdinalSuffix(day)}`
    );

    // Options for time format
    const timeOptions = { hour: "numeric", minute: "2-digit", hour12: true };
    // Format time
    const formattedTime = date
      .toLocaleTimeString("en-US", timeOptions)
      .toLowerCase();

    // Combine formatted date and time
    return `${formattedDate} • ${formattedTime}`;
  }

  // Usage
  const formattedDateTime = formatDateTime(date, startingTime);
  return (
    <section className="home-section events">
      <div className="container">
        <div className="left-content">
          <img src={image} alt="eventImg" />
        </div>
        <div className="right-content">
          <div className="heading-container">
            <span className="subheading">Upcoming Events</span>
            <h2 className="heading">
              Turn Back the <span className="red-heading">{title}</span>
            </h2>
          </div>
          <p className="text-content">{description}</p>
          <div className="link-calendar-container">
            <div className="link-container">
              <i className="fa-regular fa-arrow-right link-icon"></i>
              <Link to="get-involved">Apply to Volunteer Today</Link>
            </div>
            <div className="calendar-container">
              <i className="fa-thin fa-calendar-days calendar-icon"></i>
              <div className="calendar-information">
                <span>{formattedDateTime}</span>
                <span>{address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleEvent;
