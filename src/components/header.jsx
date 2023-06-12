import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../path/path";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_content">
            <div className="header_content-logo">
              <h2 className="heading">Portfolio</h2>
            </div>
            <div className="header_content-infor">
              <ul>
                <li>
                  <NavLink end to={PATH.home}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={PATH.about}>About</NavLink>
                </li>
                <li>
                  <NavLink to={PATH.project}>Project</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
