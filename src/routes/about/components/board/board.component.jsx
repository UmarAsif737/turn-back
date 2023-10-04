// import "./board.styles.scss"; // Rendered in about.styles

const Board = ({image, name, titles, about}) => {
    const imagePath = "src/routes/about/components/board/images/";
    return (
        <div id="board-member">
							<img src={imagePath + image} alt={name} />
							<h3>{name}</h3>

                            {Object.keys(titles).map((key) => {
                                return <span key={key}>{titles[key]}</span>;
                            })}

							<div className="bordered">
								<p>{about}</p>
							</div>
							
						</div>
    )
}

export default Board;