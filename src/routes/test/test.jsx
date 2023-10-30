const TestForm = () => {
	return (
		<>
			<form name="volunteer" method="post">
				<input type="hidden" name="volunteer-netlify-input" value="volunteer" />
				<label>
					Applicant Full Name<span className="required">*</span>
					<input type="text" name="primary-name" required />
				</label>
				<label>
					Guardian Full Name
					<span className="thin"></span>
					<input type="text" name="secondary-name" />
				</label>
				<label>
					Street Address<span className="required">*</span>
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
				<div className="checkbox-container">
					<input type="checkbox" id="previously" />
					<label htmlFor="previously">
						I have volunteered with Turn Back the Block
					</label>
				</div>
				<div className="checkbox-container">
					<input type="checkbox" id="understand" />
					<label htmlFor="understand">
						and agree to abide by it<span className="required">*</span>
					</label>
				</div>

				<label>
					How did you hear about the program?
					<span className="required">*</span>
					<select name="hear-about" required>
						<option>Website</option>
						<option>Social Media</option>
						<option>Signage</option>
						<option>Friend / Family</option>
					</select>
				</label>
				<label id="referral">
					Friend's or Family's name:
					<input type="text" name="referrer" />
				</label>
				<input
					className="button red"
					type="submit"
					value="Sign Up"
					role="button"
				/>
			</form>
		</>
	);
};

export default TestForm;
