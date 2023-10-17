// import "./story.styles.scss"; // Rendered in about.styles

const Stories = ({ id, image, title, content }) => {
	return (
		<div className="story">
			<img src={image} alt={title} loading="lazy" />
			<div className="numbered-title">
				<span className="number">{id}</span>
				<h3>{title}</h3>
			</div>
			<p>{content}</p>
		</div>
	);
};

export default Stories;
