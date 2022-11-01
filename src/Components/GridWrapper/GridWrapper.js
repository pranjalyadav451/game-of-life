import React, { useState, useEffect } from "react";
import getNumberOfColumns from "../../util/getNumberOfColumns";
import getNumberOfRows from "../../util/getNumberOfRows";
import Grid from "../Grid/Grid";
import "./GridWrapper.css";

const GridWrapper = React.forwardRef((props, ref) => {
	const gridWrapperRef = ref;
	const { setInitialWrapperSize, wrapperSize } = props;

	const [wrapperHeight, setWrapperHeight] = useState(0);
	const [wrapperWidth, setWrapperWidth] = useState(0);

	useEffect(() => {
		const { clientHeight, clientWidth } = setInitialWrapperSize();
		setWrapperHeight(clientHeight);
		setWrapperWidth(clientWidth);
	}, []);

	useEffect(() => {
		setWrapperHeight(wrapperSize.clientHeight);
		setWrapperWidth(wrapperSize.clientWidth);
	}, [wrapperSize]);

	return (
		<div ref={gridWrapperRef} className="grid-wrapper">
			<Grid
				rows={getNumberOfRows(wrapperHeight)}
				cols={getNumberOfColumns(wrapperWidth)}
			/>
		</div>
	);
});
export default GridWrapper;
