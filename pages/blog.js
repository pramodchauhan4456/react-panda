import React from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
const Blog = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.blogItem}>
          <Link href="/blogpost/learn-javascript">
            <h3>How to learn Javascript </h3>
          </Link>

          <p>Javascript is the language used to design for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn Javascript </h3>
          <p>Javascript is the language used to design for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn Javascript </h3>
          <p>Javascript is the language used to design for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to learn Javascript </h3>
          <p>Javascript is the language used to design for the web</p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
