import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

//step 1: Find the file corresponding to the slug
//Step 2: Populate them inside the page
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="container">
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </main>
    </div>
  );
};

export default slug;
