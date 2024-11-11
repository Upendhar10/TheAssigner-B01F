import { assets } from "../assets/assets";
function Marquee() {
  return (
    <div className="h-10 primary-color w-full flex justify-end">
      <img src={assets.SocialsCont} alt="SocialsCont" />
    </div>
  );
}

export default Marquee;
