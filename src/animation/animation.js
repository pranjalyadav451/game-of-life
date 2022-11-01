const updateGrid = (rows, columns) => {
	// console.log("here");
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			const cell = document.getElementById(`pos-${i}-${j}`);
			// visit all the 8 neighbours of the cell and calculate the number of black neighbours
			// if the cell is black and has 2 or 3 black neighbours, it remains black
			// if the cell is white and has 3 black neighbours, it becomes black
			// otherwise, it becomes white
			// update the cell's color accordingly
			let blackNeighbours = 0;
			for (let k = -1; k <= 1; k++) {
				for (let l = -1; l <= 1; l++) {
					if (k === 0 && l === 0) {
						continue;
					}
					// check if neighbour is in valid position
					if (i + k >= 0 && i + k < rows && j + l >= 0 && j + l < columns) {
						const neighbour = document.getElementById(`pos-${i + k}-${j + l}`);
						if (neighbour.style.backgroundColor === "rgb(60, 57, 57)") {
							blackNeighbours++;
						}
					} else {
						continue;
					}
				}
			}
			if (cell.style.backgroundColor === "rgb(60, 57, 57)") {
				// black cell
				if (blackNeighbours === 2 || blackNeighbours === 3) {
					// remains black
					cell.style.backgroundColor = "rgb(60, 57, 57)";
				} else {
					// becomes white
					cell.style.backgroundColor = "white";
				}
			} else {
				// white cell
				if (blackNeighbours === 3) {
					// becomes black
					cell.style.backgroundColor = "rgb(60, 57, 57)";
				} else {
					// remains white
					cell.style.backgroundColor = "white";
				}
			}
		}
	}
};
export default updateGrid;
