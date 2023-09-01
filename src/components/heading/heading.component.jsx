import { useLocation } from "react-router-dom";
import "./heading.styles.scss";

const Heading = () => {
	// Get current route to display in Heading
	const location = useLocation();
	const getTitle = (path) => {
		const titleMap = {
			"/about": "Who We Are",
			"/apply": "Apply To Own",
			"/get-involved": "Get Involved",
			"/media": "Explore Photos & Videos",
			"/projects": "Our Latest Projects",
		};
		return titleMap[path] || "";
	};

	// If title is empty, display nothing
	const title = getTitle(location.pathname);
	if (!title) {
		return null;
	}

	return (
		<section className="page-heading-container">
			<div className="page-heading">
				<h1>{title}</h1>
			</div>
		</section>
	);
};

export default Heading;
