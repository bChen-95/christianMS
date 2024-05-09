import { useState } from 'react';
import NavMenu from './NavMenu';

function HamburgerMenu() {
  const [navOpen, setNavOpen] = useState(false);

  function showHideNav(isOpen) {
    setNavOpen(isOpen);
  }


  return (
    <div className={`mobileTopBar ${navOpen ? 'show' : undefined}`}>
      <button
        className="hamburger-btn"
        id='hamburger-btn'
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          showHideNav(!navOpen);
        }}
      >
        <span className="hamburger-icon">
          {[...Array(3)].map((_, index) => (
              <span key={index} className={`line ${navOpen ? 'show' : ''}`}></span>
          ))}
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <NavMenu showHideNav={showHideNav} navOpen={navOpen} />
    </div>
  );
}

export default HamburgerMenu;
