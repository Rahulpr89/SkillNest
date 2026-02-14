import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Freebook from "../Components/FreeCourses";
import Footer from "../Components/Footer";
import FreeCourses from "../Components/FreeCourses";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />
      <Banner />
      <FreeCourses />
      <Footer />
    </div>
  );
};

export default Home;
