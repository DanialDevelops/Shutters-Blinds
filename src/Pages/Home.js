import React, { useState } from "react";
import { Box, Typography, Button, IconButton, Paper, autocompleteClasses } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import {
  faGem,
  faThumbsUp,
  faMoneyBillAlt,
} from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 

  const navigateToServices = () => {
    navigate('/services'); 
  };

  const navigateToContact = () => { 
    navigate('/contact');
  }

  const navigateToAbout = () => {
    navigate('/about');
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : currentSlide - 1);
  };
  
  <img
    class="orbit-image"
    src="https://www.wholesaleshuttersboise.com/wp-content/uploads/2021/07/wholesale-shutters-blinds-slide-1.jpg"
    title="wholesale-shutters-blinds-slide-1"
    alt="Blinds In Living"
  ></img>;
  const images = [
    "https://www.wholesaleshuttersboise.com/wp-content/uploads/2021/07/wholesale-shutters-blinds-slide-3.jpg",
    "https://www.wholesaleshuttersboise.com/wp-content/uploads/2021/07/wholesale-shutters-blinds-slide-1.jpg",
  ];

  const imageUrl =
    "https://static.wixstatic.com/media/94047a_62edb256697844e5a34ef23143688b9d~mv2.jpg/v1/fill/w_433,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9959.jpg";

  return (
    <Box sx={{ maxWidth: "100%", mx: "auto", my: 4, marginTop: 0 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          my: 4,
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            "& > img": { maxWidth: "100%", height: "60vh" },
          }}
        >
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ display: currentSlide === index ? "block" : "none" }}
              width="100%"
              height="60vh"
            />
          ))}
        </Box>
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: 16,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: 16,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          bgcolor: "#86bbd8",
          color: "common.white",
          p: 3,
          borderRadius: 1,
          position: "relative", 
          overflow: "hidden", 
          marginTop: -20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            bgcolor: "#86bbd8",
            color: "common.white",
            p: 3,
            borderRadius: 1,
            position: "relative", 
            overflow: "hidden", 
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ zIndex: 2, position: "relative" }}
          >
            SHUTTERS AND BLINDS
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ zIndex: 2, position: "relative", lineHeight: 2 }}
          >
            With years of accumulated expertise, our dedicated team is
            unwavering in our commitment to deliver only the finest products to
            our consumers. We pride ourselves on our ability to offer an
            exceptional range of high-quality and cost-effective goods, catering
            to the diverse needs of the Greater Toronto Area community. Our
            extensive background in sourcing and retail ensures that each item
            we carry meets rigorous standards of excellence. We understand the
            importance of value for money, and tirelessly work to bring you
            deals that make a difference. Above all, we believe in forging
            lasting relationships with our customers through trustworthy
            services, unparalleled support, and a deep understanding of what you
            truly need. Join us in a journey of discovery, quality, and
            affordability.
          </Typography>
          <Button
        variant="contained"
        onClick={navigateToServices} 
        sx={{
          bgcolor: "#E5E5E5",
          color: "#251F20",
          ":hover": {
            bgcolor: "#86bbd8",
            color: "common.white",
          },
          mt: 2,
          py: 1,
          px: 3,
          zIndex: 2,
          position: "relative",
        }}
      >
        Learn More
      </Button>
    </Box>
    
        <img
          src="https://static.wixstatic.com/media/94047a_904fa4b6786643289232ce0d995ce947~mv2.jpg/v1/fill/w_578,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9955.jpg"
          alt="Decorative"
          style={{
            width: "20%", 
            height: "auto",
            objectFit: "cover",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          }}
          width="578"
          height="492"
        />
      </Box>
      
      <Box
        sx={{
          display: "flex",
          marginBottom: 10,
          justifyContent: "center", 
          gap: 2, 
          "& > .MuiPaper-root": {
            flexBasis: "calc(33.333% - 16px)", 
            flexGrow: 1,
            maxWidth: "calc(33.333% - 16px)", 
          },
        }}
      >
        {/* First Feature */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            bgcolor: "#33658a",
            color: "common.white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            m: 1,
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)"
          }}
        >
          <FontAwesomeIcon icon={faGem} size="3x" />
          <Typography variant="h6">Guaranteed Quality</Typography>
          <Typography variant="body2" sx={{lineHeight: 2}}>
            We stand by the excellence of our products and services, ensuring
            that every purchase is synonymous with the best quality and
            craftsmanship. Experience the peace of mind that comes with
            guaranteed quality.
          </Typography>
          <Button variant="contained"  onClick={navigateToAbout}sx={{ mt: 1, bgcolor: "86bbd8" }}>
            Learn More
          </Button>
        </Paper>

        {/* Second Feature */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            bgcolor: "#33658a",
            color: "common.white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: 300,
            m: 1,
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)"
          }}
        >
          <FontAwesomeIcon icon={faThumbsUp} size="3x" />
          <Typography variant="h6"> Budget - friendly</Typography>
          <Typography variant="body2" sx={{lineHeight: 2}}>
            Discover our cost-effective solutions that don't compromise on
            quality. Enjoy the best value for your money with products and
            services that meet your budget and exceed your expectations.
          </Typography>
          <Button variant="contained" onClick={navigateToContact} sx={{ mt: 1, bgcolor: "86bbd8" }}>
            Contact Us
          </Button>
        </Paper>

        {/* Third Feature */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            bgcolor: "#33658a",
            color: "common.white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: 300,
            m: 1,
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)"
          }}
        >
          <FontAwesomeIcon icon={faMoneyBillAlt} size="3x" />
          <Typography variant="h6">Customer Satisfaction</Typography>
          <Typography variant="body2" sx={{lineHeight: 2}}>
            Your satisfaction is our top priority. We listen to your needs and
            deliver services tailored to your individual requirements, ensuring
            every interaction leaves you delighted.
          </Typography>
          <Button variant="contained" onClick={navigateToAbout} sx={{ mt: 1, bgcolor: "86bbd8" }}>
            Learn More
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;

