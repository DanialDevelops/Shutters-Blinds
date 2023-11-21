import React, { useState } from "react";
import styles from "./Home.module.css"; // Import the CSS module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faThumbsUp,
  faMoneyBillAlt,
} from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : currentSlide - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles["learn-more"]}>
        <h1>SHUTTERS AND BLINDS</h1>
        <p>
          With years of experience, we are committed to supplying consumers with
          excellent quality and inexpensive products in the GTA!
        </p>
        <button>Learn More</button>
      </div>
      <div>
        <img
          className={styles.blinds}
          src="https://static.wixstatic.com/media/94047a_62edb256697844e5a34ef23143688b9d~mv2.jpg/v1/fill/w_433,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9959.jpg"
          alt="IMG_9959.jpg"
          width="548px"
          height="345"
          srcSet="https://static.wixstatic.com/media/94047a_62edb256697844e5a34ef23143688b9d~mv2.jpg/v1/fill/w_433,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9959.jpg"
          fetchPriority="high"
          style={{ width: "548px", height: "345px", objectFit: "cover" }}
        />
      </div>
      <div className={styles.perks}>
        <div className={styles.facts}>
          <h1>
            Guaranteed Quality{" "}
            <FontAwesomeIcon className={styles.icon} icon={faGem} />
          </h1>
        </div>
        <div className={styles.facts}>
          <h1>
            Budget - friendly{" "}
            <FontAwesomeIcon className={styles.icon} icon={faMoneyBillAlt} />
          </h1>
        </div>
        <div className={styles.facts}>
          <h1>
            Customer Satisfaction{" "}
            <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
          </h1>
        </div>
      </div>
      <div className={styles.container2}>
        <img
          src="https://static.wixstatic.com/media/94047a_904fa4b6786643289232ce0d995ce947~mv2.jpg/v1/fill/w_578,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9955.jpg"
          alt="IMG_9955.jpg"
          className={styles.shutters}
          width="578"
          height="492"
          srcSet="https://static.wixstatic.com/media/94047a_904fa4b6786643289232ce0d995ce947~mv2.jpg/v1/fill/w_578,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9955.jpg"
          fetchPriority="high"
          style={{ width: "578px", height: "492px", objectFit: "cover", margin: "25px", marginBottom: "150px"}}
        />
        <div className={styles.infoSlide}>
          <div className={styles.design}>
            <h1>Minimal Design, Maximum Impact</h1>
          </div>
          <div className={styles.slider}>
            <div
              className={`${styles.slide} ${
                currentSlide === 0 ? styles.active : ""
              }`}
            >
              <img
                src="https://static.wixstatic.com/media/94047a_9bb422cf05e44ef8b868b672ce885f44~mv2.jpg/v1/fill/w_439,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94047a_9bb422cf05e44ef8b868b672ce885f44~mv2.jpg"
                alt="IMG_9961.jpg"
                width="548"
                height="328"
                style={{
                  width: "548px",
                  height: "328px",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
                fetchPriority="high"
              />
            </div>
            <div
              className={`${styles.slide} ${
                currentSlide === 1 ? styles.active : ""
              }`}
            >
              <img
                src="https://static.wixstatic.com/media/94047a_265ae2ba63f246dda3d8bcb51a6c636d~mv2.jpg/v1/fill/w_439,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/94047a_265ae2ba63f246dda3d8bcb51a6c636d~mv2.jpg"
                alt="IMG_9962.jpg"
                width="548px"
                height="328"
                style={{
                  width: "548px",
                  height: "328px",
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
                fetchPriority="high"
              />
            </div>
            <button className={styles.prevButton} onClick={prevSlide}>
              Prev
            </button>
            <button className={styles.nextButton} onClick={nextSlide}>
              Next
            </button>
          </div>
          <div className={styles.indicators}>
            <span
              className={`${styles.indicator} ${
                currentSlide === 0 ? styles.active : ""
              }`}
              onClick={() => setCurrentSlide(0)}
            />
            <span
              className={`${styles.indicator} ${
                currentSlide === 1 ? styles.active : ""
              }`}
              onClick={() => setCurrentSlide(1)}
            />
          </div>
        </div>
      </div>
      <img
        src="https://static.wixstatic.com/media/94047a_5f27c67e8f68485483a233d68a8ce483~mv2.jpg/v1/fill/w_316,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3373.jpg"
        alt="IMG_3373.jpg"
        className={styles.shutters}
        style={{
          margin: "25px",
          marginRight: "75px",
          width: "316px",
          height: "345px",
          objectFit: "cover",
        }}
        width="316"
        height="345"
        srcset="https://static.wixstatic.com/media/94047a_5f27c67e8f68485483a233d68a8ce483~mv2.jpg/v1/fill/w_316,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3373.jpg"
        fetchpriority="high"
      ></img>
    </div>
  );
};

export default Home;
