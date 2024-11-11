import { assets } from "../assets/assets";

function HeroText() {
  return (
    <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-5xl font-bold cormaorant-bold tracking-wide leading-normal flex flex-col">
        <span>Navigate your</span>
        <span className="text-[#583781]">Academic Journey</span>
        <span>with Confidence</span>
      </h1>
      <p className="w-96 cormaorant-regular">
        Providing high-quality and comprehensive assistance with assignments and
        thesis writing for students at all academic levels.
      </p>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative">
      <img src={assets.Hero} alt="Hero" />
      <HeroText />
    </div>
  );
}

export default HeroSection;
