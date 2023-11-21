import React, { useState, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import styles from "./info.module.css";
import "react-slideshow-image/dist/styles.css";

import stove from "../images/stove.png";
import staircase from "../images/staircase.png";
import window from "../images/window.png";

const images = [stove, staircase, window];

const testimonials = [
  {
    quote: "Fast. Professional. Quality",
    author: "L.D",
  },
  {
    quote:
      "Mark did shutters and blinds for my house. Price was clear without any hidden charges. Fulfilled all commitments. Much appreciated. Good luck",
    author: "A.K",
  },
  {
    quote:
      "Marquee Blinds just installed Zebra Blinds in our New Home. Mark was fantastic to Deal with throughout the whole process. The Blinds look fantastic. Mark is very professional and explained the Products prior to us deciding on the right ones. Highly recommend Marquee.",
    author: "B.D",
  },
  {
    quote:
      "Mark and his team was very professional. They worked around our schedule and didn’t inconvenience us at all. They offered great suggestions and understood our vision. Mark went the extra mile and travelled 2 hours away to help us. We will always highly recommend Marquee Shutters & Blinds to all our family and friends.",
    author: "H.N",
  },
  {
    quote:
      "Mark and Chris did an amazing job!! 100/10!! We were not sure exactly what we wanted it, but end results were great! They really enjoy their work and you can see that they care for their customers! Definitely recommending them to everyone!!!",
    author: "P.R",
  },
];

const Info = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonial, setTestimonial] = useState(
    testimonials[currentTestimonialIndex]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
      setCurrentTestimonialIndex(nextIndex);
      setTestimonial(testimonials[nextIndex]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentTestimonialIndex, testimonials]);

  return (
    <div className={styles.container}>
      <div className={styles.cont2}>
        <div className={styles.circleContainer}>
          <img src={stove} alt="stove" className={styles.circleImage} />
        </div>
        <p className={styles.info}>
          Our mission is to provide Canadian consumers with high quality and
          custom-made window coverings, whatever style or budget. We are routed
          in providing the highest standard of products and services to both
          retailers and customers. All our high-quality PVC shutters are built
          to compliment the unique and beautiful style of your home. We provide
          an amazing selection of PVC shutters, zebra-blinds, rollers shades,
          and silhouettes. Our #1 priority, is you! We like to make sure our
          clients are happy with the product and the service we look forward to
          supplying you with. We will do everything we can to look after you and
          make sure this is the best buying decision you’ve made. We are
          continuously expanding and we would love to have you be a part of our
          growth!
        </p>
      </div>
      <div className={styles.test}>
        <h2 className={styles.testimonial}>Testimonials</h2>
        <div className={styles.slide}>
          <p className={styles.content}>{testimonial.quote}</p>
          <p className={styles.content}>{testimonial.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
