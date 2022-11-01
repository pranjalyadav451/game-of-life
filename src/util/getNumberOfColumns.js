import { GRID_ITEM_WIDTH } from "../globals/globals";
const getNumberOfColumns = (width = 0) => {
	let numberOfColumns = width / GRID_ITEM_WIDTH;
	const remCols = width % GRID_ITEM_WIDTH;
	if (remCols > 0) {
		numberOfColumns += 1;
	}
	return numberOfColumns;
};
export default getNumberOfColumns;
