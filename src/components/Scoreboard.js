import React from "react";

const Scoreboard = ({ score, bestScore }) => {
	return (
    <div className="scoreboard">
        <div>
            <h2>Score: {score}</h2>
        </div>
        <div>
            <h2>Best Score: {bestScore}</h2>
        </div>
    </div>
    );
};

export default Scoreboard;
