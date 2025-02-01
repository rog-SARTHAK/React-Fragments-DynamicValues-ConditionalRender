# React Fragments, Dynamic values and Conditional Render


![alt text](https://github.com/rog-SARTHAK/React-Fragments-DynamicValues-ConditionalRender/blob/master/01.png)


React Fragments:



- In React.js, a component can't return multiple elements without a wrapper div.

- You can do this to imitate it: Using an Array of Elements with Keys
```
return [<p>Ram</p>, <strong>20</strong>];
```
- But it's tedious, to fix this React 16 introduced Fragments, which allow components to return multiple elements without adding extra nodes to the DOM.
```
import { Fragment } from "react";
return <Fragment> // </Fragment>
```
- Alternatively, you can also use its shorthand syntax:
```
<> // </>
```




Dynamic Values in JSX

- You can add any variables of your component in JSX using {} syntax.

```
function MyComponent(){
	const value = "Hey";
	return <p>{value}</p>;
}
```
- JSX allows you to write JavaScript expressions inside curly braces which includes operations, function calls, and other JS expressions that produce a value.
```
return <div> The result is: {1 + 2 + 3} </div>;
```
