import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import Logo from "../../assets/Turn-Back-The-Block-Logo-Outlined.svg";
import Logo from "../../assets/Turn-Back-The-Block-Logo-Footer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.styles.scss";

const Header = () => {
	// Define location and assign <Link> the class of "active-link" for styling current route.
	const location = useLocation();
	const getLink = (path) => {
		return location.pathname === path ? "active-link" : "";
	};

	// Handle mobile menu.
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenu = () => {
		setMenuOpen(!menuOpen);

		if (window.innerWidth <= 768) {
			const navElement = document.getElementById("nav");

			if (!menuOpen) {
				navElement.classList.add("open");
				document.body.style.overflow = "hidden";
			} else {
				navElement.classList.remove("open");
				document.body.style.overflow = "auto";
			}
		}
	};

	return (
		<>
			<header>
				<div id="nav-container">
					<Link to="/" id="logo">
						<img src={Logo} alt="Turn Back The Block Logo" />
					</Link>
					<div id="mobile-menu-container">
						<div id="mobile-sub-menu">
							<Link to="donate" id="mobile-donate">
								Donate
							</Link>

							<Link to="volunteer" id="mobile-volunteer">
								Volunteer
							</Link>
						</div>
						<div id="hamburger-container" role="button" onClick={handleMenu}>
							<FontAwesomeIcon
								icon={menuOpen ? faXmark : faBars}
								id="hamburger"
								style={{
									transform: menuOpen ? "rotate(90deg)" : "rotate(0)",
									fontSize: menuOpen ? "30px" : "26px",
								}}
							/>
							<span>{menuOpen ? "Close" : "Menu"}</span>
						</div>
					</div>
					<nav id="nav">
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
