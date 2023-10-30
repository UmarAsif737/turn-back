const TestForm = () => {
	return (
		<>
			<form className="open" name="pre-application" method="post">
				<input type="hidden" name="form-name" value="test-form" />
				<label>
					Primary Applicant Name<span className="required">*</span>
					<input type="text" name="email" required />
				</label>

				<input
					className="button red"
					type="submit"
					value="Submit"
					role="button"
				></input>
			</form>
		</>
	);
};

export default TestForm;
