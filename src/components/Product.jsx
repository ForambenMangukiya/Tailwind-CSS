import work from "../assets/work.jpg";
import bird from "../assets/bird.jpg";

const Product = () => {
  return (
    <div className="md:px-20 md:bg-white  ">
      <div class="container md:flex  md:flex-row md:bg-[#121D5C] overflow-hidden md:h-[60rem]">
        <div class="left relative md:-inset-y-96 -inset-y-40  md:-translate-y-32">
          <img class="w-[60rem]  md:w-[80%]" src={work} alt="work" />
        </div>

        <div class="right md:flex md:flex-col justify-center items-center md:items-baseline  absolute md:py-0 py-10 md:w-[36rem]  md:h-[22rem] md:ml-[41rem] md:mt-[8rem] mt-[-18em] bg-white">
          <h1 class="  font-serif font-bold md:text-4xl  text-4xl md:w-3/4  md:text-left mx-5  md:my-0 my-5   text-left">
            Product Finder Challenge
          </h1>

          <p class=" lorem hidden md:block md:w-3/4  md:mx-5 text-base md:text-left mx-5 my-5 text-left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>

          <p class="finder md:hidden sm:block md:w-3/4  md:mx-5 text-base md:text-left mx-5 my-5 text-left">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata
          </p>
        </div>

        <div className="ready hidden md:block absolute md:h-[18rem] md:px-20 md:w-[85rem] md:mt-[40rem] md:bg-[#FAFAFA]  ">
          <h1 className="text-10xl font-serif font-semibold text-[#DDDCD4] mt-[-6.5rem]">
            Ready,Set,Go!
          </h1>
        </div>
      </div>
      <div className="teasor md:flex overflow-hidden md:relative  h-[68rem] mt-[4rem] md:h-[48rem] md:mt-[-2rem]  ">
        <div className="teasorleft md:flex-1 bg-[#DDDCD4]  md:py-0 py-10 md:px-0 px-5   ">
          <h1 className="font-serif font-bold text-4xl text-[#3C3A39]  md:w-[24rem] md:h-[8rem] md:ml-[9rem] md:mt-[12rem] mt-16  ">
            This is an example for a content teasor
          </h1>
          <p className="text-base  md:w-[28rem] md:h-[4rem] md:ml-[9rem] md:py-0 py-4  text-[#2E2E22]   ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>

          <button className="text-sm font-bold text-[#2E2E22]  w-44 h-10 md:w-[11rem] md:h-[2.5rem] md:ml-[9rem]  md:mt-[4rem] mb-12 border border-solid  border-[#2E2E22]">
            Shop more
          </button>
        </div>

        <div className="teasorright overflow-hidden md:flex-1">
          <img
            src={bird}
            alt=""
            className="bird transform  md:translate-x-20 -translate-y-8 -translate-x-20 md:-translate-y-20 scale-150 md:scale-125"
          />
        </div>
      </div>
      <div className="create hidden md:block  justify-center items-center text-center overflow-hidden relative md:h-[54rem] md:mt-[-62rem] md:pr-5 ">
        <span className="text-[#121D5C] flex text-12xl font-serif md:-rotate-90   ">
          Create
        </span>
      </div>
    </div>
  );
};

export default Product;
