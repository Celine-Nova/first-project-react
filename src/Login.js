// import React from 'react';

import { Route, useHistory } from "react-router-dom";
function Login() {
    // const name = 'Celine'
    const history = useHistory();

    const routeChange = () => {
        history.push("/");
      }
    return (
        <div className="Login">
            {/* Dans return  mettre les callback en fonctions flechées sinon boucle infinie */}
            <form onSubmit={() => postDataForm()}>
                <label>
                    Nom :
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Password :
                    <input type="password" name="password" id="password" />
                </label>
                <input onClick={routeChange} type="submit" value="Envoyer" />
            </form>
        </div>
    )
}
function postDataForm(){
    let name = document.getElementById('name');
    // let password = document.getElementById('password');
    let nameValue = name.value;
    // let passwordValue = password.value;
    console.log(name.value)
    return nameValue
}
export default Login;
// export default class Login extends React.PureComponent {
//     // 4 elements importants
//     state = {
    
//     }
//     static propTypes = {
    
//     }
//     constructor(props) {
        
//     }
//     render() {
//         return (
//             <div className="Login">
//                 <form>
//                     <label>
//                         Nom :
//                         <input type="text" name="name" />
//                     </label>
//                     <label>
//                         Password :
//                         <input type="text" name="name" />
//                     </label>
//                     <input type="submit" value="Envoyer" />
//                 </form>
//             </div>
    
    
//         );
//     }
//    }