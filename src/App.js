import './App.css';
// import'./Home';
import { BrowserRouter, BrowserRouter as Router, Redirect, Route, Switch } from
'react-router-dom';
import Hello from './Home';
import Login from './Login';
function App() {
 
 
  return (
    // <div className="projet">
    //        <h1>First projet</h1>
    // </div>
    <BrowserRouter>
      <Route path="/">
        <Hello />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
   </BrowserRouter>
 

  );
}

export default App;
