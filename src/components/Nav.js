import { NavLink } from 'react-router-dom';

function Nav({isOpen, setShowNav}) {
    
  return (
    <nav className={`nav ${isOpen ? 'open' : 'closed'}`} onClick={() => setShowNav(false)} >
        <ul>
            <li>
                <NavLink to="/" className="nav-item">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="nav-item">About</NavLink>
            </li>
            <li>
                <NavLink to="/favourites" className="nav-item">Favourites</NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default Nav