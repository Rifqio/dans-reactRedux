import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h3>
        <NavLink to="/">Home</NavLink>
      </h3>
      <h3>
        <NavLink to="/list-siswa">List Siswa</NavLink>
      </h3>
    </nav>
  );
}
