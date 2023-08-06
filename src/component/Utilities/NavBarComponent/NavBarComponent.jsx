import { Link } from "react-router-dom"
import "./NavBarComponent.css"

 export const  NavBarComponent = ()  => {
    return <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item"><Link to='/' >Fuits</Link></li>
            <li className="navbar-item"><Link to='/characters' >Characters</Link></li>
        </ul>
    </nav>
}