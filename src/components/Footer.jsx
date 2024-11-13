import { assets } from "../assets/assets";

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h2 className="cormaorant-bold min-w-[200px] text-2xl italic">{title}</h2>
      <ul className="cormaorant-regular my-2 italic">
        {links.map((link, index) => (
          <li key={index} className="my-1">
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const quickLinks = [
  { text: "Home", url: "/" },
  { text: "About Us", url: "/" },
  { text: "Blog", url: "/" },
  { text: "Our Services", url: "/" },
  { text: "ILETS & PTE", url: "/" },
  { text: "Contact Us", url: "/" },
];

const Features = [
  { text: "Plagiarism Checker", url: "/" },
  { text: "Free Publications", url: "/" },
  { text: "Provides Books", url: "/" },
  { text: "Provides PDF", url: "/" },
  { text: "Paraphraser", url: "/" },
];

const OurOfferings = [
  { text: "Free IELTS Masterclass", url: "/" },
  { text: "Talk to Counseller", url: "/" },
  { text: "IELTS Exam Overview", url: "/" },
  { text: "Important IELTS Articles", url: "/" },
];

const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="cormaorant-bold text-2xl italic">NewsLetter</h2>
      <p className="cormaorant-regular font-semibold italic">
        You can trust us. We only send promo offers
      </p>
      <div className="cormaorant-regular flex items-center justify-between">
        <input
          type="email"
          placeholder="Your email here"
          className="primary-color p-1 text-center italic text-white"
        />
        <button className="btn-BgColor p-1 px-2 text-center italic text-white">
          Subscribe
        </button>
      </div>
      <img
        src={assets.SocialsCont}
        alt="Socials"
        className="h-8 w-full bg-black"
      />
    </div>
  );
};

function Footer() {
  return (
    <div className="bg-footerBg flex flex-wrap items-start justify-around gap-5 px-1 py-10">
      <FooterLinks title={"QuickLinks"} links={quickLinks} />
      <FooterLinks title={"Features"} links={Features} />
      <FooterLinks title={"Our Offerings"} links={OurOfferings} />
      <NewsLetter />
    </div>
  );
}

export default Footer;
