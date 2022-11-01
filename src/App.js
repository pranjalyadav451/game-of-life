import React, { useState, useEffect, useRef } from "react";
import updateGrid from "./animation/animation";
import GridWrapper from "./Components/GridWrapper/GridWrapper";
import getNumberOfRows from "./util/getNumberOfRows";
import getNumberOfColumns from "./util/getNumberOfColumns";
import Title from "./Components/Title/Title";

let INTERVAL_ID = null;
const handleGridUpdate = (wrapperSize) => {
	if (INTERVAL_ID) {
		clearInterval(INTERVAL_ID);
		INTERVAL_ID = null;
	} else {
		updateGrid(
			getNumberOfRows(wrapperSize.clientHeight),
			getNumberOfColumns(wrapperSize.clientWidth)
		);
		INTERVAL_ID = setInterval(() => {
			updateGrid(
				getNumberOfRows(wrapperSize.clientHeight),
				getNumberOfColumns(wrapperSize.clientWidth)
			);
		}, 500);
	}
};

const App = () => {
	const gridWrapperRef = useRef(null);
	const [wrapperSize, setWrapperSize] = useState({
		clientHeight: 0,
		clientWidth: 0,
	});

	const [buttonText, setButtonText] = useState("Start");
	const handleButtonClick = () => {
		setButtonText(buttonText === "Start" ? "Stop" : "Start");
	};

	const updateWrapperSize = () => {
		const { clientHeight, clientWidth } = gridWrapperRef.current;
		setWrapperSize({ clientHeight, clientWidth });
	};

	const setInitialWrapperSize = () => {
		if (!gridWrapperRef || !gridWrapperRef.current) return;
		const { clientHeight, clientWidth } = gridWrapperRef.current;
		setWrapperSize({ clientHeight, clientWidth });
		return { clientHeight, clientWidth };
	};

	useEffect(() => {
		window.addEventListener("resize", updateWrapperSize);
	}, []);

	return (
		<main>
			<Title mainText={"Conway's Game of Life"} subText={"The 0 Player Game"} />
			<GridWrapper
				ref={gridWrapperRef}
				wrapperSize={wrapperSize}
				setInitialWrapperSize={setInitialWrapperSize}
			/>
			<button
				onClick={() => {
					handleButtonClick();
					handleGridUpdate(wrapperSize);
				}}
				className={"btn"}
				id={"start-btn"}
			>
				{buttonText}
			</button>
		</main>
	);
};
export default App;
