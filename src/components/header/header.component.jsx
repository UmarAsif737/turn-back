import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Turn-Back-The-Block-Logo-Outlined-Two.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import "./header.styles.scss";

const Header = () => {
	// Define location and assign <Link> the class of "active-link" for styling current route.
	const location = useLocation();
	const getLink = (path) => {
		return location.pathname === path ? "active-link" : "";
	};
	useEffect(() => {
		const firstElement = document.querySelector(".get-scrolled-kid");
		if (firstElement) {
			firstElement.scrollIntoView({ behavior: "smooth" });
		}
	}, [location.pathname]);

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
	const handleCloseMenu = () => {
		setMenuOpen(false);
		if (window.innerWidth <= 768) {
			const navElement = document.getElementById("nav");
			navElement.classList.remove("open");
			document.body.style.overflow = "auto";
		}
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			const menuContainer = document.getElementById("mobile-menu-container");

			if (menuContainer && !menuContainer.contains(event.target)) {
				handleCloseMenu();
			}
		};

		document.addEventListener("click", handleOutsideClick);

		// Clean up the event listener
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	// Return to top
	const arrowRef = useRef(null);

	const handleReturn = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const returnToTop = () => {
		const returnArrow = arrowRef.current;
		if (window.scrollY <= 200) {
			returnArrow.classList.add("return-hidden");
		} else {
			returnArrow.classList.remove("return-hidden");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", returnToTop);

		// Cleanup function
		return () => {
			window.removeEventListener("scroll", returnToTop);
		};
	}, []);

	return (
		<>
			<header>
				<div id="nav-container">
					<Link to="/" id="logo">
						<img src={Logo} alt="Turn Back The Block Logo" />
					</Link>
					<div id="mobile-menu-container">
						<div id="mobile-sub-menu">
							<a
								href="#"
								className="cv-button"
								id="mobile-donate"
								onClick={handleCloseMenu}
							>
								Donate
							</a>

							<Link
								to="get-involved"
								id="mobile-volunteer"
								onClick={handleCloseMenu}
							>
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
									<Link
										to="about"
										className={getLink("/about")}
										onClick={handleCloseMenu}
									>
										About
									</Link>
								</li>
								<li>
									<Link
										to="projects"
										className={getLink("/projects")}
										onClick={handleCloseMenu}
									>
										Projects
									</Link>
								</li>
								<li>
									<Link
										to="apply"
										className={getLink("/apply")}
										onClick={handleCloseMenu}
									>
										Apply To Own
									</Link>
								</li>
								<li>
									<Link
										to="get-involved"
										className={getLink("/get-involved")}
										onClick={handleCloseMenu}
									>
										Get Involved
									</Link>
								</li>
								<li>
									<Link
										to="media"
										className={getLink("/media")}
										onClick={handleCloseMenu}
									>
										Media
									</Link>
								</li>
							</ul>
							<ul id="sub-menu-items" className="desktop">
								<li>
									<a
										href="#"
										className="cv-button"
										id="donate"
										onClick={handleCloseMenu}
									>
										Donate
									</a>
								</li>
								<li>
									<Link to="get-involved" id="volunteer">
										Volunteer
									</Link>
								</li>
							</ul>
						</ul>
					</nav>
				</div>
			</header>
			<div id="return" ref={arrowRef} onClick={handleReturn}>
				<i className="fa-sharp fa-regular fa-angle-up"></i>
			</div>
		</>
	);
};

export default Header;
