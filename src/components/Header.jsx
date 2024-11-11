import Navlinks from "./NavLinks";
import { assets } from "../assets/assets";

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
    <div className="h-12 w-36 btn-BgColor p-3 rounded-md">
      <p className="text-center font-semibold text-white">Login</p>
    </div>
  );
}

function Header() {
  return (
    <div className="h-24 flex items-center justify-between gap-2 px-2 cormaorant-regular">
      <Logo />
      <Navlinks />
      <LoginBtn />
    </div>
  );
}

export default Header;
