import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

const SSFooter = () => {
  return (
    <div className="bottomss xs:block md:hidden bg-[#DDDCD4]">
      <div className="Main w-[36rem] h-[11rem] ml-5  ">
        <div className="both flex pt-20">
          <div className="shop grid grid-5 w-[9rem] h-[1.25rem] gap-2">
            <a href="/" className="font-bold text-base">
              SHOP
            </a>
            <a href="/" className="">
              Lorem ipsum al
            </a>
            <a href="/">Dolar at</a>
            <a href="/">Veraotio</a>
            <a href="/">Chauloe</a>
          </div>

          <div className="about grid grid-6 w-[9rem] h-[1.25rem] gap-2">
            <a href="/" className="font-bold text-base">
              ABOUT
            </a>
            <a href="/">About Us</a>
            <a href="/" className="text-sm">
              Sooth Stories (Blog)
            </a>
            <a href="/">Contact Us</a>
            <a href="/">Learn More</a>
            <a href="/">Stores</a>
          </div>
        </div>

        <div className="more grid grid-4 w-[9rem] h-[1.25rem] gap-2 mt-[10rem]">
          <a href="/" className="font-bold text-base">
            MORE
          </a>
          <a href="/">Dolar at</a>
          <a href="/">Lorem at al</a>
          <a href="/">Veraotio</a>
        </div>
      </div>

      <div className="left w-1/2    ">
        <img src={logo} alt="" className="logo w-14 h-16 ml-5 mt-[16rem]" />
        <p className=" h-[2.5rem] w-[24rem] mt-[1rem] text-base px-5 ">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut
        </p>
      </div>

      <hr className="hr mt-[3rem] w-[20rem] ml-[2rem]" />

      <div className=" mt-[3rem] text-[#2E2E22] px-5">
        <div className="links ">
          <p>LEMONIZE ALL RIGHTS RESERVED</p>
          <div className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-3 underline mt-2 text-xs gap-1">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Use</a>
              <a href="/">Contact Us</a>
            </div>
            <div className=" flex  h-[1.5rem]  w-[12rem] gap-4 my-10">
              <img src={facebook} alt="" className="facebook" />
              <img src={insta} alt="" className="insta" />
              <img src={twitter} alt="" className="twitter" />
              <img src={youtube} alt="" className="youtube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSFooter;
