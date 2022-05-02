import Nav from "./Nav";
import { Link } from 'react-router-dom';
import logo from '../media/Logo.png';
import {useState, useEffect} from 'react';

function Header() {

  const [showNav, setShowNav] = useState(false);

  useEffect( () => {
    let mq = window.matchMedia('(min-width: 31em)');
    mq.addEventListener('change', isDesktop);
  }, [])

  function hamburgerClick () {
    setShowNav(!showNav);
  }

  function isDesktop(e){
    if (e.matches){
        setShowNav(false);
    }
  }
  
  return (
    <header>
      <Link to={`/`}><img src={logo} alt='logo'></img></Link>
      <div id="hamburger-icon" className={`${showNav ? 'open' : 'closed'}`} onClick={hamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Nav isOpen={showNav} setShowNav={setShowNav} />
    </header>

  )
}
export default Header