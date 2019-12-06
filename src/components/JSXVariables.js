import React from "react";

const name = "Alan";
const num = 4;
const opinion = "(I'm gonna break collin's heart here...) is...";
const answer = "Great!";
const numbers = [1, 2, 3, 4, 5];

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          
          <h1>Hi! My name is ({name}</h1>
          <h2>My name has {num} letters</h2>
          <h2>I think React {opinion}</h2>
          
          <li>
          <ul>{numbers}</ul></li>
          
          <h2>{answer}</h2>

        </div>
      </div>
    </div>

    
  );
}

export default JSXVariables;
