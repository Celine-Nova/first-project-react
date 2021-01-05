import React from "react"

class Eleve extends React.Component {
    state = {
        // données
        eleves: [
            {id: 1, nom: "Céline"},
            {id: 1, nom: "Lucas"},
            {id: 1, nom: "Dorian"}
        ]
    };
    render() {
        const title = "Liste des Clients";
        // je boucle sur mon client
        const elements = this.state.eleves.map( (eleve) => {
            return <li> {eleve.name} <button>X</button></li>
        })
        return(

            <div>
                <h1>{title}</h1>
                <ul>
                    <li>
                        Hermann <button>X</button>
                    </li>
                    <li>
                        Messan<button>X</button>
                    </li>
                    {elements}
                </ul>
                <form>
                    <input type='text' placeholder="Ajoutez un élève"/>
                    <button>Confirmer</button>
                </form>
            </div>
        )
    }
}
export default Eleve;