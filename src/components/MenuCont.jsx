import { IoCloseCircleSharp } from "react-icons/io5";
import { assets } from "../assets/assets";

function MenuCont({ setShowMenu }) {
  return (
    <div className="absolute right-0 top-0 z-10 w-full bg-[#F5F5F5]">
      <div className="cormaorant-bold relative flex h-screen w-screen flex-col items-center gap-6 px-9 py-3 pt-20 text-2xl md:w-1/3">
        {/* Close Button */}
        <IoCloseCircleSharp
          className="absolute right-5 top-5 cursor-pointer text-4xl"
          onClick={() => setShowMenu(false)} // Close the menu
        />
        {/* Menu Items */}
        <a href="#" className="hover:font-bold hover:text-[#A259FF]">
          Home
        </a>
        <a href="#" className="hover:font-bold hover:text-[#A259FF]">
          About Us
        </a>
        <a href="#" className="hover:font-bold hover:text-[#A259FF]">
          Blog
        </a>
        <a href="#" className="hover:font-bold hover:text-[#A259FF]">
          Our Services
        </a>
        <a href="#" className="hover:font-bold hover:text-[#A259FF]">
          ILETS & PTE{" "}
        </a>
        <a href="#" className="hover:font-bold hover:text-[#A259FF]">
          Contact Us
        </a>
        {/* Socials Icon */}
        <img
          src={assets.SocialsCont}
          alt="SocialsCont"
          className="cursor-pointer bg-black"
        />
      </div>
    </div>
  );
}

export default MenuCont;
