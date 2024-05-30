import React, { Component } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({ vote, votes, text, id }) => {
  const upVote = (evt) => {
    vote(id, +1);
  };
  const downVote = (evt) => {
    vote(id, -1);
  };

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onclick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>
        {vote}
      </div>
      <div className="Joke-text">{text}</div>
    </div>
  );
};

export default Joke;
