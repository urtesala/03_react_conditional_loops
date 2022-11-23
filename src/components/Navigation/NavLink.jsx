import './Nav.css';
import Icon from './../UI/icons/Icon';

// susikurti nauja komponenta NavLink
function NavLink(props) {
  return (
    <a
      className={`navLink ${props.isCurrent ? 'current' : ''}`}
      href={props.to}
    >
      <Icon>{props.icon}</Icon> {props.children}
    </a>
  );
}
// exportotuoti NavLink
export default NavLink;
