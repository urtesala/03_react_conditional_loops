import './Nav.css';
import NavLink from './NavLink';

function Nav() {
  return (
    <header className='mainHeader'>
      <nav className='container'>
        <NavLink to='#home'>Home</NavLink>
        <NavLink to='#band'>BAND</NavLink>
        <NavLink to='#tour'>TOUR</NavLink>
        <NavLink to='#contact'>CONTACT</NavLink>
        <NavLink to='#more'>MORE</NavLink>
      </nav>
    </header>
  );
}

export default Nav;
