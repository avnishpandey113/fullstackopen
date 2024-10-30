import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => (
	<p>
		<b>{text}</b>
	</p>
);

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;
const StatisticLine = ({ text, value }) => {
	if (text == 'positive') {
		return (
			<tr>
				<td>{text}</td>
				<td>{value} %</td>
			</tr>
		);
	}
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};
const Statistics = ({ stats }) => {
	const { good, neutral, bad } = stats;
	const all = good + neutral + bad;
	const avg = (good - bad) / all;
	const positive = (good / all) * 100;
	if (all === 0) return <>No feedback given</>;
	return (
		<table>
			<tbody>
				<StatisticLine text='good' value={good} />
				<StatisticLine text='neutral' value={neutral} />
				<StatisticLine text='bad' value={bad} />
				<StatisticLine text='all' value={all} />
				<StatisticLine text='average' value={avg} />
				<StatisticLine text='positive' value={positive} />
			</tbody>
		</table>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	let statistics = { good: good, neutral: neutral, bad: bad };
	function handleGoodClick() {
		setGood((prevValue) => prevValue + 1);
		statistics = {
			...statistics,
			good,
		};
	}
	function handleNeutralClick() {
		setNeutral((prevValue) => prevValue + 1);
		statistics = {
			...statistics,
			neutral,
		};
	}
	function handleBadClick() {
		setBad((prevValue) => prevValue + 1);
		statistics = {
			...statistics,
			bad,
		};
	}

	return (
		<div>
			<Header text='give feedback' />
			<Button text='good' onClick={handleGoodClick} />
			<Button text='neutral' onClick={handleNeutralClick} />
			<Button text='bad' onClick={handleBadClick} />
			<Header text='statistics' />
			<Statistics stats={statistics} />
		</div>
	);
};

Header.propTypes = {
	text: PropTypes.string,
};
Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.any,
};

Statistics.propTypes = {
	stats: PropTypes.object,
};

StatisticLine.propTypes = {
	text: PropTypes.string,
	value: PropTypes.number,
};

export default App;
