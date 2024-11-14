import { assets } from "../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HeroText() {
  return (
    <div className="absolute left-5 top-10 transform md:left-1/4 md:top-56 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1
        className="cormaorant-bold flex flex-col text-2xl font-extrabold leading-relaxed tracking-wide md:text-5xl"
        data-aos="fade-right"
      >
        <span className="text-[#9F0D76]">Navigate your</span>
        <span className="text-[#583781] md:my-5">Academic Journey</span>
        <span className="text-[#A259FF]">with Confidence</span>
      </h1>
      <p
        className="cormaorant-regular mt-3 w-[275px] text-[14px] text-black md:w-96 md:text-lg"
        data-aos="fade-right"
      >
        Providing high-quality and comprehensive assistance with assignments and
        thesis writing for students at all academic levels.
      </p>
    </div>
  );
}

function HeroStatsIcons({ Number, src, alt, spanText }) {
  return (
    <p>
      <span className="cormaorant-bold px-5 text-center text-3xl">
        {Number}
      </span>{" "}
      <br />
      <img src={src} alt={alt} className="inline" />{" "}
      <span className="cormaorant-regular">{spanText}</span>
    </p>
  );
}

function HeroStats() {
  return (
    <div className="relative my-10" data-aos="fade-down">
      <img
        src={assets.HeroX}
        alt="Hero"
        className="absolute -bottom-6 right-1 hidden md:block"
      />
      <img
        src={assets.HeroArrow}
        alt="Hero"
        className="absolute -top-5 left-2 hidden md:block"
      />
      <div className="h-30 mt-5 flex w-full flex-col gap-4">
        <div className="text-center">
          <h2 className="cormaorant-bold text-3xl">
            700+ students saved, and counting
          </h2>
          <p className="cormaorant-regular">
            50k new study notes added everyday, from the world&apos;s most
            active student community
          </p>
        </div>
        <div className="flex w-full justify-evenly">
          <HeroStatsIcons
            Number="350+"
            src={assets.StudyMaterialsIcon}
            alt="StudyMaterialsIcon"
            spanText="Study Materials"
          />
          <HeroStatsIcons
            Number="115+"
            src={assets.InstitutionsIcon}
            alt="InstitutionsIcon"
            spanText="Institutions"
          />
          <HeroStatsIcons
            Number="700+"
            src={assets.UsersIcon}
            alt="UsersIcon"
            spanText="Users"
          />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: "ease-in-out-quart",
      delay: 100,
    });
  }, []);
  return (
    <div className="relative" data-aos="fade-down">
      <img src={assets.Hero} alt="Hero" className="h-[250px] md:h-full" />
      <HeroText />
      <HeroStats />
    </div>
  );
}

export default HeroSection;
