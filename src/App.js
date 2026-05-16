import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');



    function handleChange(event) {
        setEmail(event.target.value);
    }

    let validationMessage = '';
        if(email.length < 5) {
            validationMessage = 'Email jest za krótki';
        } else if(email.length > 15) {
            validationMessage = 'Email jest za długi';
        } else {
            validationMessage = 'Email jest ok';
        }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <h3>Twój email wielkimi literami to {email.toUpperCase()} </h3>
            <input type="text"  onChange={handleChange}/>
            {email.length > 0 && <div>Błąd: {validationMessage} </div>}
        </div>
    );
}

export default App;
