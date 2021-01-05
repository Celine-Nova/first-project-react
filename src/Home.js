import'./Login';

function Hello(){
    // <Route  exact path="/Home"/> 
    return(
        <div className="Home">
            <h1>Hello 2 iTech</h1>
            <a
                className="Login-link"
                href="./login"
                // target="_blank" 
            >
                Connectez-vous!
            </a>
            <h2>Bienvenue</h2>
            <a
                className="Timer-link"
                href="./timer"
           // target="_blank"
            >
                Timer
            </a>    <br/>
            <a
                className="chrono-link"
                href="./oclock"
            >
                Oclock 
            </a> <br/> 
            <a
                className="eleve-link"
                href="./eleves"
            >
                Eleves
            </a>
        </div>
        
    );
}
export default Hello;