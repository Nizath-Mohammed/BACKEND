import logo from '../src/assets/globe.png'
export function Header(){
    return (
        <header>
            <img src={logo} alt="Logo" width = {24} height = {24}/>
            <h2>My Travel Journey</h2>
        </header>
    )
}