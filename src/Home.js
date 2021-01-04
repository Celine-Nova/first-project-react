import'./Login';

function Hello(){
    return(
        <div className="Home">
            <h1>Hello 2 iTech</h1>
            <a
           
                className="Login-link"
                href="./Login"
                target="_blank"
                rel="noopener noreferrer"
            >
                Connectez-vous!
            </a>
            <h2>Bienvenue  </h2>
        </div>
        
    );
}
export default Hello;