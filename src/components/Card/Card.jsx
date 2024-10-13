import React from "react";
import styles from "./Card.module.css";

function Card({ product }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.productImage}
        src={product.image}
        alt={`Image of ${product.title}`}
      />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{product.title}</h3>
        <div className={styles.pricingSection}>
          <div>
            <a href="/sign-in" className={styles.signInText}>
              Sign in
            </a>{" "}
            or{" "}
            <a href="/create-account" className={styles.createAccountText}>
              Create an account
            </a>{" "}
            to see pricing
          </div>
          <div className={styles.heartIcon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Heart Icon</title>
              <path
                d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.heartPath}
              />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Card;
