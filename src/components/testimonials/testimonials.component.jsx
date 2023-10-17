import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import testimonialsData from "./testimonials.data.json";
import "./testimonials.styles.scss";

const Testimonials = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTestimonial(
				(prevIndex) => (prevIndex + 1) % testimonialsData.length
			);
		}, 10000); // 10 seconds

		// Cleanup the interval on unmount
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="home-section-t testimonials">
			<div className="container-t">
				<div className="content">
					{/* START SPACER - USE LARGEST CONTENT */}
					<div className="subheading-quote spacing">
						<span className="subheading">Michael Weintraub</span>
						<blockquote>
							"Turn Back the Block not only enabled me to own a home again,
							something that I hadn’t done in 20 years, but it also helped build
							selfesteem and how to take care of something that belongs to me. I
							participated in the building of it, so this means even more to me.
							Being able to share what I have, gives others’ hope. Other folks
							come here and say, well if you can do this, I can do that too. To
							that I say ‘Well, YES you can!’ It offers them that hand of hope
							and help."
						</blockquote>
						<Link to="get-involved" className="button">
							Get Involved
						</Link>
					</div>
					{/* END SPACER - USE LARGEST CONTENT */}
					{testimonialsData.map((testimonial, index) => (
						<div className="subheading-quote real" key={testimonial.author}>
							<span
								className={`subheading ${
									currentTestimonial === index ? "active" : ""
								}`}
							>
								{testimonial.author}
							</span>
							<blockquote
								className={`${currentTestimonial === index ? "active" : ""}`}
							>
								{testimonial.content}
							</blockquote>
							<Link to="get-involved" className="button">
								Get Involved
							</Link>
						</div>
					))}

					{/* <Link to="get-involved" className="button">
						Get Involved
					</Link> */}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
