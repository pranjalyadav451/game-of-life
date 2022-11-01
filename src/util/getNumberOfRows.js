import { GRID_ITEM_HEIGHT } from "../globals/globals";
const getNumberOfRows = (height = 0) => {
	let numberOfRows = height / GRID_ITEM_HEIGHT;
	const remRows = height % GRID_ITEM_HEIGHT;
	if (remRows > 0) {
		numberOfRows += 1;
	}
	return numberOfRows;
};
export default getNumberOfRows;
