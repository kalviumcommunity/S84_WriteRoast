import React from "react";
import "./RoastJoke.css"; 

function RoastJoke({ joke }) {
    return (
        <div className="roast-joke-card">
            <p className="joke-content">"{joke.content}"</p>
            <p className="joke-author">- {joke.author} roasting {joke.target}</p>
        </div>
    );
}

export default RoastJoke;
