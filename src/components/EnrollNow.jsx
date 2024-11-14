import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function EnrollNowText() {
  return (
    <div className="flex flex-col gap-1 md:gap-3">
      <h2 className="cormaorant-bold text-2xl text-[#9F0D76] md:text-5xl">
        ILETS Preparation
      </h2>
      <h2 className="cormaorant-bold text-2xl tracking-wide text-[#4C0C5C] md:text-5xl">
        Online Best Learning
      </h2>
      <h2 className="cormaorant-bold text-2xl text-[#A259FF] md:text-5xl">
        Opportunity in the World
      </h2>
      <p className="cormaorant-regular w-2/3 text-base tracking-tighter md:w-2/3 md:text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax negotium,
        dicerem impudens.
      </p>
    </div>
  );
}

function EnrollNowBtn() {
  return (
    <button className="btn-BgColor cormaorant-regular my-1 rounded-md px-2 py-1 text-white hover:bg-[#A259FF] md:m-5 md:w-[250px] md:p-3 md:text-2xl">
      Enroll Now
    </button>
  );
}

function EnrollNow() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out-quart",
      delay: 100,
    });
  }, []);
  return (
    <div className="EnrollNowBG flex items-center p-5">
      <div data-aos="fade-right">
        <EnrollNowText />
        <EnrollNowBtn />
      </div>
    </div>
  );
}

export default EnrollNow;
