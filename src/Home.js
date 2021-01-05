import'./Login';

function Hello(){
    // <Route  exact path="/Home"/> 
    return(
        <div className="Home">
            <h1>Hello 2 iTech</h1>
            <a
                className="Login-link"
                href="./Login"
                // target="_blank" 
            >
                Connectez-vous!
            </a>
            <h2>Bienvenue   </h2>
            <a
                className="Timer-link"
                href="./Timer"
           // target="_blank"
            >
         Timer
       </a>
        </div>
        
    );
}
export default Hello;