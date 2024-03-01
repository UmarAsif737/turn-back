import React from "react";

const EventLabel = ({
  image,
  title,
  description,
  date,
  startingTime,
  endingTime,
  address,
}) => {
  // Function to format time from 24-hour to 12-hour format
  function formatTime(time) {
    let [hours, minutes] = time.split(":");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; // Convert to 12-hour format
    return `${hours}:${minutes} ${ampm}`;
  }
  function formatDate(inputDate) {
    // Convert string to Date object
    const date = new Date(inputDate);

    // Define month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Function to add the appropriate suffix to the day
    function getDateSuffix(day) {
      if (day > 3 && day < 21) return "th"; // for teens
      switch (day % 10) {
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

    // Construct the formatted date
    const formattedDate = `${
      monthNames[date.getMonth()]
    } ${date.getDate()}${getDateSuffix(date.getDate())}`;

    return formattedDate;
  }

  // Example usage
  const formattedDate = formatDate(date); // Output will be "Feb 17th"

  const formattedTime =
    formatTime(startingTime) + " - " + formatTime(endingTime);

  return (
    <>
      <p className="date">{formattedDate}</p>
      <p className="event">
        <span>{title}</span> <span>-</span> {formattedTime} <br /> located at{" "}
        {address}
        <br />
      </p>
    </>
  );
};

export default EventLabel;
