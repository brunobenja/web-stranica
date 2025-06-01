"use client";

import Image from "next/image";
import styles from "./Introduction.module.css";
import { useTheme } from "../../context/ThemeContext";

const Introduction = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={styles.introduction}>
      <h1>HI</h1>
      <h2>I&apos;M BRUNO.</h2>
      <h3>I design websites that will help you</h3>

      <ol className={styles.intro_list}>
        <li>
          <span className={styles.list_elements}>stand out</span>
        </li>
        <li>
          <span className={styles.list_elements}>
            be aesthetically pleasing
          </span>
        </li>
        <li>
          <span className={styles.list_elements}>
            articulate the most important messages
          </span>
        </li>
        <li>
          <span className={styles.list_elements}>boost your earnings</span>
        </li>
      </ol>
    </div>
  );
};

export default Introduction;
