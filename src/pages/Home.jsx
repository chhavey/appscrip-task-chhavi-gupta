import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Check } from "../assets/check.svg";
import { ReactComponent as Checkbox } from "../assets/checkbox.svg";

function Home() {
  const [products, setProducts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");
  const [showIdealFor, setShowIdealFor] = useState(false);

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE: HIGH TO LOW",
    "PRICE: LOW TO HIGH",
  ];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleFilter1 = () => {
    setShowIdealFor(!showIdealFor);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.menu}>
          HOME&nbsp;&nbsp;|&nbsp;&nbsp;<span>SHOP</span>
        </div>

        <div className={styles.heroWrapper}>
          <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>

        <div className={styles.controls}>
          <div className={styles.mobileLeft}>FILTER</div>
          <div className={styles.leftControls}>
            <span className={styles.boldText}>{products.length} ITEMS</span>
            <div className={styles.filterBtnWrapper}>
              <Arrow
                className={showFilters ? styles.leftArrow : styles.rightArrow}
                aria-hidden="true"
              />
              <div
                className={styles.filterBtn}
                onClick={() => setShowFilters(!showFilters)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && setShowFilters(!showFilters)
                }
              >
                {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
              </div>
            </div>
          </div>
          <div className={styles.rightControls}>
            <div className={styles.dropdownWrapper}>
              <div
                className={styles.dropdownButton}
                onClick={() => setShowDropdown(!showDropdown)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && setShowDropdown(!showDropdown)
                }
              >
                {selectedOption}
                <Arrow
                  className={showDropdown ? styles.upArrow : styles.downArrow}
                  aria-hidden="true"
                />
              </div>
              {showDropdown && (
                <div className={styles.dropdownOptions}>
                  {options.map((option) => (
                    <div
                      key={option}
                      className={styles.dropdownOption}
                      onClick={() => handleSelectOption(option)}
                      role="option"
                      aria-selected={option === selectedOption}
                    >
                      {option === selectedOption && <Check />}
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          {showFilters && (
            <div className={styles.filters}>
              <div className={styles.filterWrapper2}>
                <Checkbox aria-hidden="true" /> CUSTOMIZABLE
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>IDEAL FOR</div>{" "}
                  <Arrow
                    className={showIdealFor ? styles.upArrow : styles.downArrow}
                    onClick={handleFilter1}
                    aria-hidden="true"
                  />
                </div>
                <div className={styles.subtitle}>All</div>

                {showIdealFor && (
                  <div className={styles.filter1}>
                    <div className={styles.labelText}> Unselect all</div>
                    <div className={styles.wrap}>
                      <Checkbox aria-hidden="true" /> Men
                    </div>
                    <div className={styles.wrap}>
                      <Checkbox aria-hidden="true" /> Women
                    </div>
                    <div className={styles.wrap}>
                      <Checkbox aria-hidden="true" /> Baby G Kids
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>OCCASION</div>{" "}
                  <Arrow className={styles.downArrow} aria-hidden="true" />
                </div>
                <div className={styles.subtitle}>All</div>
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>WORK</div>{" "}
                  <Arrow className={styles.downArrow} aria-hidden="true" />
                </div>
                <div className={styles.subtitle}>All</div>
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>FABRIC</div>{" "}
                  <Arrow className={styles.downArrow} aria-hidden="true" />
                </div>
                <div className={styles.subtitle}>All</div>
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>SEGMENT</div>{" "}
                  <Arrow className={styles.downArrow} aria-hidden="true" />
                </div>
                <div className={styles.subtitle}>All</div>
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>SUITABLE FOR</div>{" "}
                  <Arrow className={styles.downArrow} aria-hidden="true" />
                </div>
                <div className={styles.subtitle}>All</div>
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>RAW MATERIALS</div>{" "}
                  <Arrow className={styles.downArrow} aria-hidden="true" />
                </div>
                <div className={styles.subtitle}>All</div>
              </div>
              <div className={styles.filterContainer}>
                <div className={styles.filterWrapper}>
                  <div className={styles.filterHeading}>PATTERN</div>{" "}
                  <Arrow className={styles.downArrow} aria-hidden="true" />
                </div>
                <div className={styles.subtitle}>All</div>
              </div>
            </div>
          )}

          <div className={styles.productGrid}>
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
