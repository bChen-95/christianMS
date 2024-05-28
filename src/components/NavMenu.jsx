import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';



function NavMenu({ showHideNav }) {

  function closeNavMenu(e){
    if(window.innerWidth < 800) {
      showHideNav();
    }else{
      e.target.blur();
    }
  }
  
  return (
    <nav>
      <ul onClick={closeNavMenu}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavMenu;