import { Link } from "react-router-dom";
import logo from "../../img/logo-black.png";

export default function NavItem({ title, click }) {
  return (
    <li className="navigation__item" onClick={(e) => click && click(e, title)}>
      {title === "Home" ? (
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      ) : (
        <Link to={`/${title}`}>
          <div>{title}</div>
        </Link>
      )}
    </li>
  );
}
