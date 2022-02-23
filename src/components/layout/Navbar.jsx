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
  Profile,
  SocialIcons,
} from "../styles/Nav.styled";
import { NavItems } from "../../constants/NavItems";
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar starts */}
      <Nav>
        <div>
          {/* Logo */}
          <a href="#hero">
            <Logo src="./images/logo.png" alt="logo" />
          </a>
        </div>

        {/* Hamburger menu icon */}
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>

        {/* NavList starts */}
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {/* Profile picture in hamburger menu */}
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img src="./images/profile-pic.jpg" alt="Joshua Garcia" />
                      <span>Joshua Lorenzo</span>
                    </Profile>
                  </NavLink>
                ) : null}

                {/* NavList in hamburger menu */}
                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}

                {/* Social Icons */}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    {/* GitHub Icon */}
                    <NavLink
                      href="https://github.com/joshualorenzodev"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>

                    {/* LinkedIn Icon */}
                    <NavLink
                      href="https://linkedin.com/in/joshualorenzodev"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>

                    {/* Twitter Icon */}
                    <NavLink
                      href="https://twitter.com/joshlorenzodev"
                      target="_blank"
                    >
                      <FaTwitter />
                    </NavLink>
                  </SocialIcons>
                ) : null}

                {navItem.hasCTA ? (
                  <CTAButton
                    margin="10px"
                    href="https://github.com/joshualorenzodev"
                    targe="_blank"
                  >
                    Source
                  </CTAButton>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
        {/* NavList ends */}
      </Nav>
      {/* Navbar ends */}
    </>
  );
};

export default Navbar;
