import './App.css';
// import'./Home';
import { BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch } from
'react-router-dom';
import Hello from './Home';
import Login from './Login';
import Timer from './Timer';
import Clock from './Date';
import Eleve from './Eleve';
function App() {
 
 
  return (
    // <div className="projet">
    //        <h1>First projet</h1>
    // </div>
    <BrowserRouter>
      {/* Route avec Hook */}
      <Route path="/">
        <Hello />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/timer">
        <Timer />
      </Route>

      {/* Route avec classe */}
      <Route path="/oclock">
        <Clock />
      </Route> 
      <Route path="/eleves">
        <Eleve />
      </Route>
   </BrowserRouter>
 

  );
}

export default App;
