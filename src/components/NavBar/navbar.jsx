import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contacto</li>
          <li>About</li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
