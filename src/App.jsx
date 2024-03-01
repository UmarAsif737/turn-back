import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Heading from "./components/heading/heading.component";
import Home from "./routes/home/home.page";
import About from "./routes/about/about.page";
import Apply from "./routes/apply/apply.page";
import GetInvolved from "./routes/get-involved/get-involved.page";
import Projects from "./routes/projects/projects.page";
import Media from "./routes/media/media.page";
import "./App.scss";
import axios from "axios";

const AppRoutes = () => {
  const location = useLocation();
  const [events, setEvents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = "http://localhost:1337/";
  // Use useEffect to fetch data from the API
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make HTTP request and wait for the response
        const response = await axios.get(
          `${backendUrl}api/events?populate=*&sort[0]=date:desc`
        );

        // Set the data to state
        setEvents(response.data.data);
      } catch (error) {
        // If there is an error, save it to state
        setError(error);
      } finally {
        // Update the loading state
        setIsLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
  console.log(events);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={1000} classNames="fade">
        <Routes>
          <Route
            path="/"
            element={
              <Home events={events} error={error} isLoading={isLoading} />
            }
            index
          />
          <Route path="about" element={<About />} />
          <Route path="apply" element={<Apply />} />
          <Route
            path="get-involved"
            element={
              <GetInvolved
                events={events}
                error={error}
                isLoading={isLoading}
              />
            }
          />
          <Route path="projects" element={<Projects />} />
          <Route path="media" element={<Media />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Heading />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
