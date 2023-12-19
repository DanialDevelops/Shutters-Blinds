import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, useTheme, useMediaQuery } from "@mui/material";
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

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

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const FadeInBox = styled(Box)(({ theme }) => ({
  animation: `${fadeIn} 2s ${theme.transitions.easing.easeInOut}`,
}));

const FadeOutBox = styled(Box)(({ theme }) => ({
  animation: `${fadeOut} 2s ${theme.transitions.easing.easeInOut}`,
}));

const Info = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonial, setTestimonial] = useState(testimonials[currentTestimonialIndex]);
  const [animate, setAnimate] = useState(true); // State to control the animation

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false); // Start fade-out animation
      setTimeout(() => {
        const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
        setCurrentTestimonialIndex(nextIndex);
        setTestimonial(testimonials[nextIndex]);
        setAnimate(true); // Start fade-in animation
      }, 1000); // Wait for fade-out animation to complete
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentTestimonialIndex, testimonials]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: 4, alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
        <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: '400px', height: '400px', marginRight: '45px' }}>
          <img src={stove} alt="stove" style={{ width: '100%', height: '100%', objectFit: 'cover', marginRight: '20px' }} />
        </Box>
        <Typography variant="body1" sx={{ backgroundColor:'#33658a', color: '#E5E5E5', padding: 3, width: isMobile ? '80%' : '45%', height: '400px', fontSize: '24px' }}>
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
        </Typography>
      </Box>
      <FadeInBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 8,
          marginBottom: 15,
          width: '100%',
          animation: animate ? `${fadeIn} 2s ${theme.transitions.easing.easeInOut}` : 'none',
        }}
      >
        <Typography variant="h4" sx={{ color: '#251F20', marginBottom: 2 }}>Testimonials</Typography>
        <Paper elevation={3} sx={{ backgroundColor: '#33658a', color: '#E5E5E5', padding: 3, fontSize: '20px', margin: 1 }}>
          <Typography variant="body1">{testimonial.quote}</Typography>
          <Typography variant="body1">{testimonial.author}</Typography>
        </Paper>
      </FadeInBox>
    </Box>
  );
};

export default Info;
