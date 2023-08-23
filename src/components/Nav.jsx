import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <label class="logo">Logo</label>
        <ul>
          <li>
            <a class="active" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
