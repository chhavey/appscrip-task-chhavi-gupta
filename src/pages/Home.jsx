import React from "react";
import styles from "./Home.module.css";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <h1> THIS IS HOME PAGE.</h1>

      <div className={styles.container}>
        This text uses Simplon Norm 500 weight.
      </div>
      <Footer />
    </>
  );
}

export default Home;
