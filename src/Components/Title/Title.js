import "./Title.css";
const Title = ({ mainText, subText }) => {
	return (
		<div class="title">
			<h1>
				{mainText}
				<span>{subText}</span>
			</h1>
		</div>
	);
};

export default Title;
