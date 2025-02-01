import React from "react";

import './App.css';

function App() {
  return (
    //<div>
    <React.Fragment>

    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />

    </React.Fragment>
    //</div>
  );
};

//NetflixSeries component in PascalCase name
const NetflixSeries = () => {


  const name = "Stranger Things";

  const summary =
  "In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to a child's disappearance, which begins to tear at the fabric of an otherwise-peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that more is going on than meets the eye.";

  let age = 19;

  let canWatch = "Not Available";
  if (age >= 18) canWatch = "Watch Now";

  const returnGenre = () => {
    const genre = "RomCom" ;
    return genre;
  }


return(
  <div>
    <div>
      <img src="stranger-things.jpg" alt="stranger-things.jpg" />
    </div>

    {/* {} to use dynamic javascript values in React jsx*/}
    <h1>Name: {name} </h1> 
    <h3>Rating: 7.5</h3>
    <p>Summary: {summary}</p>
    <p>Genre: {returnGenre()} </p>
    <button> {canWatch} </button>
  </div>
);
};




export default App;


/*


React Fragments:



- In React.js, a component can't return multiple elements without a wrapper div.

- You can do this to imitate it: Using an Array of Elements with Keys

- return [<p>Ram</p>, <strong>20</strong>];

- But it's tedious, to fix this React 16 introduced Fragments, which allow components to return multiple elements without adding extra nodes to the DOM.

import { Fragment } from "react";
return <Fragment> // </Fragment>

- Alternatively, you can also use its shorthand syntax:

<> // </>


*/

/*

Dynamic Values in JSX

- You can add any variables of your component in JSX using {} syntax.

- 
function MyComponent(){
	const value = "Hey";
	return <p>{value}</p>;
}

- JSX allows you to write JavaScript expressions inside curly braces which includes operations, function calls, and other JS expressions that produce a value.

- return <div> The result is: {1 + 2 + 3} </div>;

*/