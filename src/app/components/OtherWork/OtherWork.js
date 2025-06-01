"use client";
import { useState } from "react";
import styles from "./OtherWork.module.css";
import Image from "next/image";
const OtherWork = () => {
  const projects = [
    {
      title: "The Rolling Stones",
      imageUrl: "/assets/images/other_projects/RollingStones.png",
      link: "https://example.com/",
    },
    {
      title: "Bob Dylan ",
      imageUrl: "/assets/images/other_projects/BobDylan.png",
      link: "https://example.com/",
    },
    {
      title: "David Bowie",
      imageUrl: "/assets/images/other_projects/DavidBowie.png",
      link: "https://example.com/",
    },
    {
      title: "Santana",
      imageUrl: "/assets/images/other_projects/Santana.png",
      link: "https://example.com/",
    },
  ];

  return (
    <div className={styles.otherWorkContainer}>
      <h1 className={styles.otherWorkTitle}>other work</h1>
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.projectContent}>
                <Image
                  title={project.title}
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.projectImage}
                  width={600}
                  height={400}
                />
                <h2 className={styles.projectTitle}>{project.title}</h2>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherWork;
