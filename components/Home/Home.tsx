"use client";
import React from "react";
import Hero from "./Hero/Hero";
import RecentImage from "./RecentImage/RecentImage";
import About from "./About/About";
import Price from "./Price/Price";
import Review from "./Review/Review";
import Faq from "./Faq/Faq";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
      <Price />
      <Review />
      <Faq />
    </div>
  );
};

export default Home;
