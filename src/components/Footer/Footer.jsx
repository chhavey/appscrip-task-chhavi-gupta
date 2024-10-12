import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as USA } from "../../assets/usa.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Gpay } from "../../assets/gpay.svg";
import { ReactComponent as Mastercard } from "../../assets/mastercard.svg";
import { ReactComponent as Paypal } from "../../assets/paypal.svg";
import { ReactComponent as Amex } from "../../assets/amex.svg";
import { ReactComponent as ApplePay } from "../../assets/apple.svg";
import { ReactComponent as ShopPay } from "../../assets/shoppay.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.subscribe}>
          <h2 className={styles.heading}>BE THE FIRST TO KNOW</h2>
          <p className={styles.text}>Sign up for updates from mettā muse.</p>
          <div className={styles.emailContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter your email..."
            />
            <button className={styles.button}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.contact}>
            <h2 className={styles.heading}>CONTACT US</h2>
            <div className={styles.text}>+44 221 133 5360</div>
            <div className={styles.text}>customercare@mettamuse.com</div>
          </div>
          <div className={styles.currency}>
            <h2 className={styles.heading}>CURRENCY</h2>
            <div className={styles.currencyText}>
              <USA /> ◆ USD
            </div>
            <div className={styles.text}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu1}>
          <div className={styles.submenu}>
            <h2 className={styles.heading}>mettā muse</h2>
            <ul className={styles.list}>
              <li>About</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className={styles.submenu}>
            <h2 className={styles.heading}>QUICK LINKS</h2>
            <ul className={styles.list}>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className={styles.menu2}>
          <div className={styles.payWrapper}>
            <div className={styles.contact}>
              <h2 className={styles.heading}>FOLLOW US</h2>
              <div className={styles.currencyText}>
                <Instagram /> <LinkedIn />
              </div>
            </div>
            <div className={styles.currency}>
              <h2 className={styles.heading}>mettā muse ACCEPTS</h2>
              <div className={styles.currencyText}>
                <Gpay /> <Mastercard /> <Paypal /> <Amex /> <ApplePay />{" "}
                <ShopPay />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
