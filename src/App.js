import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [isLoggedInd, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            { !isLoggedInd && <div>
                <p>Zaloguj się emailem</p>
            <input type="text"  onChange={(event) => setEmail(event.target.value)}/>
            <button type="button" onClick={()=> setIsLoggedIn(true)}>Wchodzę</button>
            </div> }
            { isLoggedInd    &&     <div>
                <h2>Witaj {email} !</h2>
                <a onClick={()=>setIsLoggedIn(false)}>Wyloguj</a>
        </div> }
        </div>

    );
}

export default App;
