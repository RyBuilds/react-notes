import { Link } from "react-router-dom";
import classes from "../css/MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">LOGO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/page">PAGE</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
