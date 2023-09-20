import "./Header.css";

import img from "./logos_coderhouse.png";
const Header = (props) => {
  return (
    <div className="Header">
      <img src={img} alt="" />
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

export default Header;
