import React from "react";
import Hero from "../components/Hero";
import FeatureDestination from "../components/FeatureDestination";
import ExclusiveOffers from "../components/ExclusiveOffers";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureDestination />
      <ExclusiveOffers />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
