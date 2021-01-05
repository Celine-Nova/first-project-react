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
            <h2>Bienvenue  </h2>
        </div>
        
    );
}
export default Hello;