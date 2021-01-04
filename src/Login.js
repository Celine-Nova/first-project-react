// import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from
'react-router-dom';
import { useHistory } from "react-router-dom";
function Login() {
    const history = useHistory();

    const routeChange = () =>{ 
      let path = "/Home"; 
      history.push(path);
    }
    return (
        <div className="Login">
            <form onSubmit={postDataForm}>
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