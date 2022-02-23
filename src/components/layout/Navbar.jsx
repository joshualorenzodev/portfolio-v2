import { useState } from "react";
import React from "react";
import {
  Nav,
  Logo,
  MenuIcon,
  LineOne,
  LineTwo,
  LineThree,
  NavList,
  NavItemStyled,
  NavLink,
} from "../styles/Nav.styled";
import { NavItems } from "../../constants/NavItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        <div>
          <a href="#hero">
            <Logo src="./images/logo.png" alt="logo" />
          </a>
        </div>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((item, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                <NavLink href="">About</NavLink>
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
