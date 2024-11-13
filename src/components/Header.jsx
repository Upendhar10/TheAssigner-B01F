import Navlinks from "./NavLinks";
import { assets } from "../assets/assets";
import { MdOutlineMenu } from "react-icons/md";

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
    <div className="btn-BgColor w-16 rounded-md p-1 md:w-36 md:p-3">
      <p className="text-center font-semibold text-white">Login</p>
    </div>
  );
}

function MenuBtn() {
  return (
    <div className="lg:hidden">
      <MdOutlineMenu className="h-10 w-10" />
    </div>
  );
}

function Header() {
  return (
    <div className="cormaorant-regular flex h-24 items-center justify-between gap-2 px-2">
      <Logo />
      <Navlinks />
      <div className="flex items-center justify-evenly gap-10">
        <LoginBtn />
        <MenuBtn />
      </div>
    </div>
  );
}

export default Header;
