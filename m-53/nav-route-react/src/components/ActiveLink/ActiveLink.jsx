import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to, chi}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? "active" :""}
    >
      {/* other code */}
    </NavLink>
  );
};

export default ActiveLink;
