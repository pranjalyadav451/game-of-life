import { useState } from "react";

import "./GridItem.css";
const GridItem = ({ gridPosition }) => {
	const [color, setColor] = useState("white");
	const handleClick = () => {
		setColor(color === "white" ? "rgb(60, 57, 57)" : "white");
	};
	return (
		<div
			id={gridPosition}
			className="grid-item"
			style={{ backgroundColor: color }}
			onClick={handleClick}
		></div>
	);
};
export default GridItem;
