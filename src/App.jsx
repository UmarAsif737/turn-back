import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Heading from "./components/heading/heading.component";
import Home from "./routes/home/home.page";
import About from "./routes/about/about.page";
import Apply from "./routes/apply/apply.page";
import "./App.scss";

const App = () => {
	return (
		<Router>
			<Header />
			<Heading />
			<Routes>
				<Route path="/" element={<Home />} index />
				<Route path="about" element={<About />} />
				<Route path="apply" element={<Apply />} />
				{/* <Route path="projects" element={<Projects />}>
					<Route path="*" element={<NoPage />} />
				</Route>
				<Route path="projects/:directory" element={<ProjectViewer />} />
				<Route path="*" element={<NoPage />} /> */}
			</Routes>
			{/* <Outlet /> */}
			<Footer />
		</Router>
	);
};

export default App;
