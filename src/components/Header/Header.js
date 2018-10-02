import React from "react";
import "./Header.css";

const Header = props => (
  <ul className="header">
    <li className="title">{props.children}</li>
    <li className="message">{props.message}</li>
    <li className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </li>
  </ul>
);

export default Header;