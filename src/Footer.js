import React from "react";

function Footer(props) {
  return (
    <div>
      <footer className="footer">
        <ul className="ul">
          {props.address.map((elem, index) => (
            <li className="li" key={index}>
              {elem}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
