// import "./board.styles.scss"; // Rendered in about.styles

const Board = ({ image, name, titles, about }) => {
	return (
		<div id="board-member">
			<img src={image} alt={name} />
			<h3>{name}</h3>

			{Object.keys(titles).map((key) => {
				return <span key={key}>{titles[key]}</span>;
			})}

			<div className="bordered">
				<p>{about}</p>
			</div>
		</div>
	);
};

export default Board;
