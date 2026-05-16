export default function UserPanel({email, onLogout}) {

    return <div>
        <h2>Witaj { email } !</h2>
        <a onClick={()=> onLogout()}>Wyloguj</a>
    </div>
}