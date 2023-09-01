import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Turn-Back-The-Block-Logo-Outlined.svg";
import "./header.styles.scss";

const Header = () => {
	// Define location and assign <Link> the class of "active-link" for styling current route.
	const location = useLocation();
	const getLink = (path) => {
		return location.pathname === path ? "active-link" : "";
	};
	return (
		<>
			<header>
				<div id="nav-container">
					<Link to="/" id="logo">
						<img src={Logo} alt="Turn Back The Block Logo" />
					</Link>
					<nav>
						<ul id="main-menu">
							<ul id="main-menu-items">
								<li>
									<Link to="about" className={getLink("/about")}>
										About
									</Link>
								</li>
								<li>
									<Link to="projects" className={getLink("/projects")}>
										Projects
									</Link>
								</li>
								<li>
									<Link to="apply" className={getLink("/apply")}>
										Apply To Own
									</Link>
								</li>
								<li>
									<Link to="get-involved" className={getLink("/get-involved")}>
										Get Involved
									</Link>
								</li>
								<li>
									<Link to="media" className={getLink("/media")}>
										Media
									</Link>
								</li>
							</ul>
							<ul id="sub-menu-items" className="desktop">
								<li>
									<Link to="donate" id="donate">
										Donate
									</Link>
								</li>
								<li>
									<Link to="volunteer" id="volunteer">
										Volunteer
									</Link>
								</li>
							</ul>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
