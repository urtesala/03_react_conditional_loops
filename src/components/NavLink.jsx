import './Nav.css';

function NavLink(props) {
  return (
    <a className='navLink' href={props.to}>
      {props.children}
    </a>
  );
}
export default NavLink;
