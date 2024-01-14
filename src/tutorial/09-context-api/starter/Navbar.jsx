import React, { createContext, useState, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();
// console.log(NavbarContext.p);

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const { user, setUser } = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h3>Context API</h3>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
