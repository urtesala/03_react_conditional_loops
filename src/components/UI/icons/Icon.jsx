import './Icon.css';

function Icon(props) {
  let iconClassString = 'fa fa-';
  iconClassString += props.children;
  iconClassString += props.size === 'lg' ? ' fa-4x' : ' fa-2x';

  //patikrinam ar component gavo klase tarp pradzios ir pabaigos tabu

  if (!props.children) {
    return <i class='fa fa-window-close fa-3x' aria-hidden='true'></i>;
  }

  return <i className={iconClassString} aria-hidden='true'></i>;
}

export default Icon;
