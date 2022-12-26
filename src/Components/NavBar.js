import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { useScrollPosition } from "../Hooks/useScrollPosition";
const links = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Services",
  },
  {
    id: 3,
    link: "HowWeWork",
  },
  {
    id: 4,
    link: "Benefits",
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateBorder, setAnimateBorder] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    windowDimension.width > 800 && setIsMenuOpen(false);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  const handleMenu = () => {
    windowDimension.width < 700 && setIsMenuOpen(!isMenuOpen);
  };

  const borderAnimation = () => {
    setAnimateBorder(!animateBorder);
  };

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        isMenuOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.nav
      }
    >
      {!isMenuOpen && <Logo />}
      {!isMenuOpen ? (
        <AiOutlineMenu
          className={styles.btn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          cursor="pointer"
          size={25}
          color="#fff"
        />
      ) : (
        <IoCloseSharp
          className={styles.btn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          cursor="pointer"
          size={30}
          color="#fff"
        />
      )}
      {isMenuOpen && (
        <ul className={styles.linksList}>
          {links.map(({ id, link }) => (
            <div key={id}>
              <Link
                // onMouseEnter={borderAnimation}
                onClick={handleMenu}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "HowWeWork" ? "How We Work" : link}
              </Link>
              <div
                className={animateBorder ? styles.hidden : styles.border}
              ></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksList}>
          {links.map(({ id, link }) => (
            <div>
              <Link
                // onMouseEnter={borderAnimation}
                onClick={handleMenu}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "HowWeWork" ? "How We Work" : link}
              </Link>

              <div
                className={animateBorder ? styles.hidden : styles.border}
              ></div>
            </div>
          ))}
          <Link
            onClick={handleMenu}
            to={"Contact"}
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
