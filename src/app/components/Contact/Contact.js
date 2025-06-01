"use client";
import styles from "./Contact.module.css";
import React from "react";

const Contact = () => {
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Europe/Zagreb",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setTime(now.toLocaleTimeString("en-GB", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.contactBox}>
      <p>say hi:</p>
      <section className={styles.contact}>
        <ul className={styles.grid}>
          <li className={styles.item} style={{ gridRow: 1, gridColumn: 1 }}>
            <a href="mailto:your@email.com">email</a>
          </li>
          <li className={styles.item} style={{ gridRow: 2, gridColumn: 2 }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
          <li className={styles.item} style={{ gridRow: 3, gridColumn: 3 }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gitHub
            </a>
          </li>
          <li className={styles.item} style={{ gridRow: 4, gridColumn: 4 }}>
            <span>
              Osijek, Croatia <br />
              <span>{time}</span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
