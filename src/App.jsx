import React from "react";
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

import TestForm from "./routes/test/test";

import "./App.scss";

const AppRoutes = () => {
	const location = useLocation();
	return (
		<TransitionGroup>
			<CSSTransition key={location.key} timeout={1000} classNames="fade">
				<Routes>
					<Route path="/" element={<Home />} index />
					<Route path="about" element={<About />} />
					<Route path="apply" element={<Apply />} />
					<Route path="get-involved" element={<GetInvolved />} />
					<Route path="projects" element={<Projects />} />
					<Route path="media" element={<Media />} />
					<Route path="test" element={<TestForm />} />
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
