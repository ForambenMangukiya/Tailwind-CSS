import shop from "../assets/shop.svg";
import cart from "../assets/shoppingcart.svg";
import call from "../assets/phonecall.svg";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  return (
    <div className="md:px-20 md:bg-white ">
      <div className="footer  md:flex  justify-around items-center text-center md:h-[15rem] h-[32rem] md:my-0 my-20 mt-[-2rem]  overflow-hidden relative bg-white  ">
        <div className="shop flex flex-col  items-center justify-center text-center text-[#2E2E22]  ">
          <img
            src={shop}
            alt=""
            className="shop  w-[1.75rem] h-[1.75rem]  md:mt-[3.5rem] mt-[3.5rem] md:ml-[18rem]"
          />
          <p className="font-semibold text-[1rem]  w-[9rem] h-[2.5rem]  md:ml-[18rem] mt-[1.5rem]">
            We're offering new ways to shop
          </p>
          <a
            href="/"
            className="shop h-[1rem] w-[5rem] md:ml-[18rem] mb-[3rem]  text-xs mt-[0.75rem] underline"
          >
            Store locator
          </a>
        </div>

        <div className="cart flex flex-col items-center justify-center text-center">
          <img
            src={cart}
            alt=""
            className="shop  w-[1.75rem] h-[1.75rem]  md:mt-[3.5rem] "
          />
          <p className="font-semibold text-[1rem]  w-[9rem] h-[2.5rem] mt-[1.5rem]">
            Buy online, pickup in store
          </p>
          <a
            href="/"
            className="shop h-[1rem] w-[5rem]  mb-[3rem]  text-xs mt-[0.75rem] underline"
          >
            Learn more
          </a>
        </div>

        <div className="call flex flex-col items-center justify-center text-center ]">
          <img
            src={call}
            alt=""
            className="shop  w-[1.75rem] h-[1.75rem]  md:mr-[18.5rem] md:mt-[3.5rem] mt-[1rem]"
          />
          <p className="font-semibold text-[1rem]  w-[9rem] h-[1.25rem] md:mr-[18rem]  mt-[1.5rem]">
            Curbside
          </p>
          <p className="font-semibold text-[1rem]  w-[9rem] h-[1.25rem] md:mr-[18rem]  ">
            pickup
          </p>
          <a
            href="/"
            className="shop h-[1rem] w-[5rem] md:mr-[18rem] mb-[3rem]  text-xs mt-[0.75rem] underline"
          >
            Learn more
          </a>
        </div>
      </div>
      {/* //large screen */}
      <div className="bottom md:h-[40rem] bg-[#DDDCD4] hidden md:block ">
        <div className="md:flex justify-center items-center text-[#2E2E22] py-10 px-10">
          <div className="right  flex  md:w-[36rem] md:h-[11rem] md:justify-between md:order-2 md:mr-[4rem] md:mt-[12rem] text-sm  gap-12 ">
            <div className="shop grid grid-5 md:w-[9rem] md:h-[1.25rem] md:gap-2  ">
              <a href="/" className="font-bold text-base ">
                SHOP
              </a>
              <a href="/" className="">
                Lorem ipsum al
              </a>
              <a href="/">Dolar at</a>
              <a href="/">Veraotio</a>
              <a href="/">Chauloe</a>
            </div>

            <div className="about grid grid-6 md:w-[9rem] md:h-[1.25rem] md:gap-2 ">
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

            <div className="more grid grid-4 md:w-[9rem] md:h-[1.25rem] md:gap-2 ">
              <a href="/" className="font-bold text-base">
                MORE
              </a>

              <a href="/">Dolar at</a>
              <a href="/">Lorem at al</a>
              <a href="/">Veraotio</a>
            </div>
          </div>

          <div className="left md:w-1/2  md:ml-[9rem]  ">
            <img
              src={logo}
              alt="logo"
              className="logo md:w-14 md:h-16 md:mt-[10rem] mt-[5rem]"
            />
            <p className=" md:h-[2.5rem] md:w-[24rem] md:mt-[1.25rem] mt-[2rem] text-base ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
        </div>

        <hr className="hr md:mt-[3rem] md:w-[75rem] md:ml-[9rem]" />

        <div className="flex   md:ml-[9rem]  md:mt-[3rem] text-[#2E2E22] px-10">
          <div className="links ">
            <p className=" md:font-semibold ">LEMONIZE ALL RIGHTS RESERVED</p>
            <div className="grid md:grid-cols-2 grid-rows-2 gap-2">
              <div className="grid grid-cols-3 underline  md:text-base text-xs gap-1">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms of Use</a>
                <a href="/">Contact Us</a>
              </div>
              <div className="flex justify-between md:items-end  md:h-[1.5rem] md:w-[12rem] md:ml-[22rem] w-[12rem] ">
                <img src={facebook} alt="" className="facebook" />
                <img src={insta} alt="" className="insta" />
                <img src={twitter} alt="" className="twitter" />
                <img src={youtube} alt="" className="youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
