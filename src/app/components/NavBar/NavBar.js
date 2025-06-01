"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

import Image from "next/image";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [showContent, setShowContent] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); // prevent default link behavior
    setShowContent(false); // close mobile menu on click
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        /*smooth scroll*/ behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.nav_container}>
      <a href="#top">
        <Image
          src={
            isDarkMode
              ? "/assets/images/logo/logo-white.png"
              : "/assets/images/logo/logo-black.png"
          }
          alt="logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </a>
      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              [about]
            </a>
          </li>
          <li>
            <a
              href="#featured_work"
              onClick={(e) => handleLinkClick(e, "featured_work")}
            >
              [work]
            </a>
          </li>
          <li>
            <a href="#other" onClick={(e) => handleLinkClick(e, "other")}>
              [other]
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              [contact]
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile Navigation */}
      <nav className={`${styles.nav_mobile} ${showContent ? styles.show : ""}`}>
        <ul className={styles.links}>
          <li className={styles.nav_link}></li>
          <li className={styles.nav_link}>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              [about]
            </a>
          </li>
          <li className={styles.nav_link}>
            <a
              href="#featured_work"
              onClick={(e) => handleLinkClick(e, "featured_work")}
            >
              [work]
            </a>
          </li>
          <li className={styles.nav_link}>
            <a href="#other" onClick={(e) => handleLinkClick(e, "other")}>
              [other]
            </a>
          </li>
          <li className={styles.nav_link}>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              [contact]
            </a>
          </li>
        </ul>
      </nav>
      {/* Theme Button and Burger Menu */}
      <div className={styles.actions}>
        <button
          className={styles.theme_button}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <Image
            src={
              isDarkMode
                ? "/assets/images/theme_button/light_mode.png"
                : "/assets/images/theme_button/dark_mode.png"
            }
            alt="theme"
            width={20}
            height={20}
          />
        </button>
        {/* Hamburger Menu */}
        <div
          className={styles.burger}
          onClick={() => setShowContent(!showContent)}
        >
          <Image
            src={
              isDarkMode
                ? "/assets/buttons/burger-white.png"
                : "/assets/buttons/burger-black.png"
            }
            alt="menu"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
