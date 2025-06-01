"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedWork.module.css";

const FeaturedWork = () => {
  const [showContent, setShowContent] = useState(true);

  const projects = [
    {
      title: "Project 1",
      imageUrl: "/assets/images/featured_projects/project1.png",
      link: "https://example.com/",
    },
    {
      title: "Project 2",
      imageUrl: "/assets/images/featured_projects/project2.png",
      link: "https://example.com/",
    },
    {
      title: "Project 3",
      imageUrl: "/assets/images/featured_projects/project3.png",
      link: "https://example.com/",
    },
    {
      title: "Project 4",
      imageUrl: "/assets/images/featured_projects/project4.png",
      link: "https://example.com/",
    },
  ];

  return (
    <div className={styles.featuredWorkContainer}>
      <h1 className={styles.featuredWorkTitle}>FEATURED WORK</h1>
      {showContent && projects.length > 0 && (
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" /* breaks the link between tabs */
            >
              {" "}
              {/* dinamicko dodjeljivanje klasa */}
              <div
                className={`${styles.projectCard} ${
                  index === 0 ? styles.leftCard : styles.rightCard
                }`}
              >
                <Image
                  src={project.imageUrl || "/assets/images/placeholder.png"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className={styles.projectImage}
                />
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedWork;
