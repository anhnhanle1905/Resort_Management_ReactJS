import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import "./Home.css";
import Hero from "../../components/Hero";
import Flash_sale from "../../components/flash-sale";
import Slider from "../../components/slider";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
        <Slider />
        <Hero />
        <Flash_sale />
      </main>
      <Footer />
    </div>
  );
}