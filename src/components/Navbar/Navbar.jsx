import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Marquee } from "../../assets/marquee.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Bag } from "../../assets/bag.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className={styles.marquee}>
        <div className={styles.marqueeWrapper}>
          <Marquee /> Lorem ipsum dolor
        </div>
        <div className={styles.marqueeWrapper}>
          <Marquee /> Lorem ipsum dolor
        </div>
        <div className={styles.marqueeWrapper}>
          <Marquee /> Lorem ipsum dolor
        </div>
      </div>
      <div className={styles.logo}>
        <Logo aria-label="Company Logo" />
        <h1 className={styles.heading}>LOGO</h1>
        <div className={styles.icons}>
          <Search aria-label="Search" />
          <Heart aria-label="Favorites" />
          <Bag aria-label="Shopping Bag" />
          <Profile aria-label="Profile" />
          <div className={styles.language}>
            ENG{" "}
            <Arrow className={styles.downArrow} aria-label="Select Language" />
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menuItem}>SHOP</div>
        <div className={styles.menuItem}>SKILLS</div>
        <div className={styles.menuItem}>STORIES</div>
        <div className={styles.menuItem}>ABOUT</div>
        <div className={styles.menuItem}>CONTACT US</div>
      </div>
    </nav>
  );
}

export default Navbar;
