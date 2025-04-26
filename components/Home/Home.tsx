"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import RecentImage from "./RecentImage/RecentImage";
import About from "./About/About";
import Price from "./Price/Price";
import Review from "./Review/Review";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
      <Price />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
