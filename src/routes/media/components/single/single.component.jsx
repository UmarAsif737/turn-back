import "./single.styles.scss";

// {Object.keys(titles).map((key) => {
//     return <span key={key}>{titles[key]}</span>;
// })}

const Single = ({image, title, date, onClick}) => {
    return (
        <div className="media-single" onClick={onClick}>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<span>{date}</span>
		</div>
    )
}

export default Single;