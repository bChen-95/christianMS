import { useState, useEffect } from 'react';
import NavMenu from './NavMenu';

function HamburgerMenu() {
  const [navOpen, setNavOpen] = useState(false);

  function showHideNav(isOpen) {
    setNavOpen(isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest('.hamburger-btn') && !event.target.closest('.nav-menu')) {
        setNavOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`mobileTopBar ${navOpen ? 'show' : undefined}`}>
      <button
        className="hamburger-btn"
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onClick={() => {
          showHideNav(!navOpen);
        }}
      >
        <span className="hamburger-icon">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
        <span className="sr-only">Menu</span>
      </button>
      <NavMenu showHideNav={showHideNav} navOpen={navOpen} />
    </div>
  );
}

export default HamburgerMenu;
