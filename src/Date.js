import React from 'react';
import Timer from './Timer'
class Clock extends React.Component {
    // 4 Elements importants
    //   -1- l'état
    // state = {//}
    // - 2 - Le type et le style
        //     static propTypes = {
            
        //     }
    // -3- le Constructeur
    constructor(props) {
    super(props);
    this.state = {date: new Date()};
    }
    componentDidMount() {
    // je déclare le timerID et je lui assigne un setInterval d'une seconde sur la fonction tick()
    // je créee un chrono sur l'heure actuelle
    this.timerID = setInterval(
    () => this.tick(),
    1000
    );
    }
    // Fonction tick je modifie l'état
    tick() { this.setState({ date: new Date() }); }
    //  je réinitialise (détruit) le setInterval
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //  -4- Le render
    render() {
    return (
    <div>
    <h1>Bonjour, monde !</h1>
    <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
    {/*  Sur le click je stop le setInterval (le chrono) */}
    <button onClick={() => this.componentWillUnmount()}>Stop </button>
    
    </div>
    );
    }
   }
   export default Clock;