import './Nav.css';
import NavLink from './NavLink';

function Nav(props) {
  // susikurti nauja komponenta
  return (
    <header className='mainHeader'>
      <nav className='container'>
        {props.navItems.map((nObj) => (
          <NavLink
            key={nObj.id}
            to={nObj.to}
            icon={nObj.icon}
            isCurrent={nObj.active}
          >
            {nObj.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

// exportotuoti
export default Nav;
