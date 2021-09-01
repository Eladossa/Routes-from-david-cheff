import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = ({ setAuth }) => {
  const history = useHistory();
  function east() {
    setAuth(true);
    history.push("/signup");
  }
  return (
    <div className={classes.header}>
      <button onClick={() => history.push("/pageone")}>PAGE 1</button>
      <button onClick={() => history.push("/pagetwo")}>PAGE 2</button>
      <button onClick={() => history.push("/not_found")}>PAGE 404</button>

      <button onClick={east}>Sign up</button>
    </div>
  );
};

export default Header;
