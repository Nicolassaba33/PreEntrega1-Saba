import "./Header.css";
import imgLogo from "../../assets/images/logo.jpg";
import SvgIcon from "@mui/material/SvgIcon";
import PersonIcon from "@mui/icons-material/Person";
const Header = () => {
  return (
    <header>
      <div className="hero">
        <div className="container-logo">
          <a href="index.html">
            <img src={imgLogo} alt="Logo" />
          </a>
        </div>

        <div className="container-user">
          <a href="#">
            <SvgIcon component={PersonIcon} className="iconUser" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
