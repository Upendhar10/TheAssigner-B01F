import { assets } from "../assets/assets";
function Marquee() {
  return (
    <div className="primary-color hidden h-10 w-full justify-end md:flex">
      <img src={assets.SocialsCont} alt="SocialsCont" />
    </div>
  );
}

export default Marquee;
