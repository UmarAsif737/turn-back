import { useState } from "react";
import "./apply.styles.scss";

const Apply = () => {
	const [heard, setHeard] = useState("");

	const handleInputChange = (e) => {
		setHeard(e.target.value);
	};

	// Accordion
	const [isOpen, setIsOpen] = useState({
		first: false,
		second: false,
		third: true,
	});

	const toggleAccordion = (key) => {
		setIsOpen({
			...isOpen,
			[key]: !isOpen[key],
		});
	};

	return (
		<>
			<section id="apply-section">
				<div className="container">
					<div id="apply-information">
						<div
							className="heading-button-container"
							onClick={() => toggleAccordion("first")}
						>
							<h2>
								What are the responsibilities of a Turn Back the Block
								Applicant?
							</h2>
							<i
								className={`fa-sharp fa-solid fa-triangle ${
									isOpen.first ? "rotated" : ""
								}`}
							></i>
						</div>

						<ul className={`${isOpen.first ? "open" : ""}`}>
							<li>
								Participate in sweat equity activities totaling 350 hours. Of
								those hours, 150 can be completed by friends and family, however
								200 hours must be completed by you and those residing in your
								household. Once accepted you will be required to work a minimum
								of 25 sweat equity hours per month and to report those hours
								monthly.
							</li>
							<li>
								Attend one-on-one credit/budget counseling sessions with CSRA
								Economic Opportunity Authority, Inc. during which you will
								establish a budget, review your credit report, establish a debt
								repayment plan, and establish a savings plan.
							</li>
							<li>Complete a Homebuyer Education Class.</li>
							<li>
								Attend homeowner candidate meetings (as may be scheduled
								periodically).
							</li>
							<li>Maintain monthly mortgage payments</li>
							<li>
								Maintain the property according to Turn Back the Block standards
								– taking sole responsibility for all costs related to
								maintenance and repair of the property.
							</li>
							<li>
								Participate in media/press coverage related to Turn Back the
								Block.
							</li>
							<li>
								Attend individual post-purchase housing counseling sessions for
								one year postoccupancy.
							</li>
							<li>Occupy home as primary residence.</li>
						</ul>
						<div
							className="heading-button-container"
							onClick={() => toggleAccordion("second")}
						>
							<h2>Who qualifies for a Turn Back the Block home?</h2>
							<i
								className={`fa-sharp fa-solid fa-triangle ${
									isOpen.second ? "rotated" : ""
								}`}
							></i>
						</div>

						<p className={`${isOpen.second ? "open" : ""}`}>
							There is no income minimum or maximum to qualify. Applicants are
							selected by our Family Selection & Shepherding Committee, based on
							several factors to include: need, willingness to participate in
							sweat equity, and ability to demonstrate repayment. “Need” differs
							with each applicant, and may include insufficient credit, or lack
							of down payment to qualify for a traditional mortgage.
						</p>
					</div>
					<div id="apply-form-container">
						<div
							className="heading-button-container"
							onClick={() => toggleAccordion("third")}
						>
							<h2>How do I apply for a home?</h2>
							<i
								className={`fa-sharp fa-solid fa-triangle ${
									isOpen.third ? "rotated" : ""
								}`}
							></i>
						</div>

						<form
							className={`${isOpen.third ? "open" : ""}`}
							name="preapplication-form"
							method="post"
						>
							<input
								type="hidden"
								name="form-name"
								value="preapplication-form"
							/>
							<p>To apply, please submit your pre-application below:</p>
							<label>
								Primary Applicant Name<span className="required">*</span>
								<input type="text" name="primary-name" required />
							</label>
							<label>
								Secondary Applicant Name
								<input type="text" name="secondary-name" />
							</label>
							<label>
								Current Street Address<span className="required">*</span>
								<input type="text" name="address" required />
							</label>
							<label>
								City<span className="required">*</span>
								<input type="text" name="city" required />
							</label>
							<label>
								State<span className="required">*</span>
								<input
									type="text"
									name="state"
									defaultValue="GA"
									minLength="2"
									maxLength="2"
									required
								/>
							</label>
							<label>
								Zipcode<span className="required">*</span>
								<input
									type="text"
									name="zipcode"
									pattern="[0-9]{5}"
									minLength="5"
									maxLength="5"
									required
								/>
							</label>
							<label>
								Phone Number<span className="required">*</span>
								<input type="tel" name="phone" required />
							</label>
							<label>
								Email Address<span className="required">*</span>
								<input type="email" name="email" required />
							</label>
							<label>
								Current Employer<span className="required">*</span>
								<input type="text" name="employer" required />
							</label>
							<label>
								How did you hear about the program?
								<span className="required">*</span>
								<select name="hear-about" required onChange={handleInputChange}>
									<option>Website</option>
									<option>Social Media</option>
									<option>Signage</option>
									<option>Friend / Family</option>
								</select>
							</label>
							{heard === "Friend / Family" && (
								<label id="referral">
									Friend's or Family's name:
									<input type="text" name="referrer" />
								</label>
							)}
							<input
								className="button red"
								type="submit"
								value="Submit Pre-Application"
								role="button"
							></input>
						</form>
						<p id="pre">
							We will contact you once we receive your pre-application. If you
							are eligible for the program, the next steps are an intake with
							CSRA EOA, Inc., completing a full application, and beginning
							budget & credit counseling.
						</p>
						<p className="disclaimer">
							*A TBTB applicant is not promised a house to purchase.
							Homeownership is subject to housing availability, timeline, and
							program qualification.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Apply;
