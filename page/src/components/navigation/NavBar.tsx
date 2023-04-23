import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="leftside">
        <Link to="/">
          <h1>Productes</h1>
        </Link>
        <Link to="/card">
          <h2>Categore</h2>
        </Link>
      </div>
      <div className="rightside">
        <div>
          <input type="search" name="search" placeholder="search" />
          <button>find</button>
        </div>
        <div>
          <button type="submit">user</button>
        </div>
        <Link to="/Login">
          <img src="" alt="img" />
          Log in
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
