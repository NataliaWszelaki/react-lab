import "milligram";
import './App.css';
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

import {useState} from "react";


function App() {

    const [loggedInUsername, setIsLoggedInUsername] = useState(null);

    return (
        <div className="container">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            {
                loggedInUsername
                    ? <UserPanel email={loggedInUsername}
                                 onLogout={()=>setIsLoggedInUsername(null)}/>
                    : <LoginForm onLogin={(email)=> setIsLoggedInUsername(email)}/>
            }
        </div>

    );
}

export default App;
