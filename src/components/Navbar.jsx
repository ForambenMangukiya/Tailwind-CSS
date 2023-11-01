// import { useState } from "react";
import search from "../assets/search.svg";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div class="container mx-auto cursor-pointer overflow-hidden relative md:px-20   ">
      <div class="navbar flex justify-between items-center  bg-[#121D5C] text-white ">
        <div class="flex justify-center items-center  md:order-2">
          <div class="hamburger inline-block p-4 cursor-pointer md:hidden ">
            <div class="line h-0.5 w-6 my-1 bg-[#FAFAFA]"></div>
            <div class="line h-0.5 w-6 my-1 bg-[#FAFAFA]"></div>
            <div class="line h-0.5 w-6 my-1 bg-[#FAFAFA]"></div>
          </div>
        </div>

        <div class="logo text-center flex md:order-1  md:h-28">
          <div class="flex justify-center md:bg-white md:w-72">
            <img
              class=" md:h-14 md:w-14 w-[50%] md:ml-32 md:mt-8"
              src={logo}
              alt=""
            />
          </div>

          <div class="nav_center absolute w-fit md:ml-[11rem] text-xs font-bold md:static md:w-auto bg-[#121D5C] md:bg-[#121D5C] inset-0 md:flex md:items-center md:mx-4 md:space-x-6 -translate-x-96 md:translate-x-0">
            <div>LAPTOPS</div>
            <div>DESKTOPS</div>
            <div>MONITORE</div>
            <div>DRUCKER</div>
          </div>
        </div>

        <div class="cart text-center md:order-3 flex text-xs md:gap-[3rem] md:mr-[10rem] ">
          <div class="flex pt-1 ">
            <img class="w-2 h-2 " src={search} alt="" />
          </div>
          <div class="mx-2 pr-5">CART</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
