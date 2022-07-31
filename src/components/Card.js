import React, { useState, useEffect } from "react";

const Card = ({ score, setScore, bestScore, setBestScore }) => {
	const [valSeq, setValSeq] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
	const [isRandomized, setIsRandomized] = useState(false);
	const [cardName] = useState([
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
	]);
	const [isChoosen, setIsChoosen] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	let isChoosenDummy = [false, false, false, false, false, false, false, false];
	const cardClicked = (val) => {
		randomize();
		if (isChoosen[val]) {
			if (bestScore < score) {
				setBestScore(score);
			}
			setScore(0);
			isChoosenDummy = isChoosenDummy.map(() => {
				return false;
			});
			setIsChoosen(isChoosenDummy);
		} else {
			setScore(score + 1);
			isChoosenDummy = [...isChoosen];
			isChoosenDummy[val] = true;
			setIsChoosen(isChoosenDummy);
		}
	};

	const randomize = () => {
		let record = [];
		let empty = [0, 0, 0, 0, 0, 0, 0, 0];
		empty.map((val) => {
			let number = Math.floor(Math.random() * (7 - 0 + 1) + 0);
			while (record.includes(number)) {
				number = Math.floor(Math.random() * (7 - 0 + 1) + 0);
			}
			empty[val] = number;
			record.push(empty[val]);
			return number;
		});
		setValSeq(record);
	};

	useEffect(() => {
		if (!isRandomized) {
			randomize();
			setIsRandomized(true);
		}
	}, [isRandomized]);

	return <div className="card-container">
		{valSeq.map((val) => {
			return (
				<div className="column">
					<div
						className="card"
						id={cardName[val]}
						onClick={(e) => {
							cardClicked(val);
						}}
					>
						{cardName[val]}
					</div>
				</div>
			);
		})}
	</div>
};

export default Card;
