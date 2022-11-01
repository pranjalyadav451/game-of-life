import { useEffect, useState } from "react";
import GridRow from "../GridRow/GridRow";
import "./Grid.css";

const Grid = ({ rows, cols }) => {
	const [columnSize, setColumnSize] = useState(0);
	const [rowSize, setRowSize] = useState(0);

	useEffect(() => {
		setColumnSize(cols);
		setRowSize(rows);
	}, [rows, cols]);

	const gridRows = [];
	for (let i = 0; i < rowSize; i++) {
		gridRows.push(<GridRow xPos={i} nElements={columnSize} key={i} />);
	}

	return <div className="grid-main">{gridRows}</div>;
};
export default Grid;
