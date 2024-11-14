import Navlinks from "./NavLinks";
import { assets } from "../assets/assets";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import MenuCont from "./MenuCont";

function Logo() {
  return (
    <div className="h-24 w-64">
      <img
        src={assets.theAssignerlogo}
        alt="theAssignerlogo"
        className="h-full w-full"
      />
    </div>
  );
}

function LoginBtn() {
  return (
    <div className="btn-BgColor w-16 cursor-pointer rounded-md p-1 hover:bg-[#A259FF] md:w-36 md:p-3">
      <p className="text-center font-semibold text-white">Login</p>
    </div>
  );
}

function MenuBtn({ setShowMenu }) {
  return (
    <div className="lg:hidden">
      <MdOutlineMenu
        className="h-10 w-10"
        onClick={() => setShowMenu(true)} // Open the menu
      />
    </div>
  );
}

function Header() {
  const [showMenu, setShowMenu] = useState(false); // Manage menu visibility

  return (
    <div className="cormaorant-regular flex h-24 items-center justify-between gap-2 px-2">
      <Logo />
      <div className="hidden lg:flex">
        <Navlinks /> {/* Show Navlinks on desktop */}
      </div>
      <div className="flex items-center justify-evenly gap-10">
        <LoginBtn />
        <MenuBtn setShowMenu={setShowMenu} />
      </div>

      {/* Conditionally render the MenuCont */}
      {showMenu && <MenuCont setShowMenu={setShowMenu} />}
    </div>
  );
}

export default Header;
