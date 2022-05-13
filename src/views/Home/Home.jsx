import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import Hero from "../../components/Hero";
import Flash_sale from "../../components/flash-sale";
// import Slider from "../../components/Slider";
import Fly from "../../components/Fly";
import Favorite_Place from "../../components/Favorite_Place";
import Banner from "../../components/Banner";
import ButtonCard from "../../components/ButtonCard";
import Favorite_Room from "../../components/Favorite_Room";
import ImageGallery from "../../components/ImageGallery";
import AwesomeServices from "../../components/AwesomeServices";

export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
        <Banner />
        {/* <Slider /> */}
        <Favorite_Room />
        {/* <Hero /> */}
        <AwesomeServices />
        <ImageGallery />
        <Flash_sale />
        <Favorite_Place />
        <Fly />

        <ButtonCard />
      </main>
      <Footer />
    </div>
  );
}
