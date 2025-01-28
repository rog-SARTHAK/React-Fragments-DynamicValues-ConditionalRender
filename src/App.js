import './App.css';

function App() {
  return (
    <div>

    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />

    </div>
  );
};

const NetflixSeries = () => {
return(
<div>
<div>
  <img src="stranger-things.jpg" alt="stranger-things.jpg" />
</div>
<h1>Stranger Things</h1>
<h3>Rating: 7.5</h3>
<p>
In a small town where everyone knows everyone, ;
a peculiar incident starts a chain of events 
that leads to a child's disappearance, which 
begins to tear at the fabric of an otherwise-peaceful 
community. Dark government agencies and seemingly 
malevolent supernatural forces converge on the town, 
while a few of the locals begin to understand that more 
is going on than meets the eye.
</p>
</div>
)

};

export default App;
