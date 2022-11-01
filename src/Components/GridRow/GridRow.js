import { useState, useEffect } from "react";
import GridItem from "../GridItem/GridItem";
import "./GridRow.css";
const GridRow = ({ nElements, xPos }) => {
	console.log("GridRow", nElements);
	const rowElements = [];
	for (let i = 0; i < nElements; i++) {
		rowElements.push(<GridItem gridPosition={`pos-${xPos}-${i}`} key={i} />);
	}
	return <div className="grid-row">{rowElements}</div>;
};

export default GridRow;
