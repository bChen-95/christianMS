// import { HashLink } from 'react-router-hash-link';


function NavMenu() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        {/* <li>
          <HashLink smooth to="/#contact">
                <a>Contact</a>
            </HashLink>
        </li> */}

      </ul>
    </nav>
  );
}

export default NavMenu;