import React, { useState } from 'react';
import { Route, useHistory } from "react-router-dom";

function Timer() {
    function Home() {
        const history = useHistory();
        return <button onClick={() => history.push('/')}>retour</button>;
      }
 // Déclare une nouvelle variable d'état, qu’on va appeler « count »
//  on initialise le state
 const [count, setCount] = useState(0);
 return (
 <div>
 <p>Vous avez cliqué {count} fois</p>
 <button onClick={() => setCount(count + 1)}>
 Cliquez ici
 </button>
 {Home()}
 </div>
 );
}
export default Timer;