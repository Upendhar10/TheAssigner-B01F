import { assets } from "../assets/assets";
const AdvantagesCard = ({ title, description }) => {
  return (
    <div className="cormaorant-regular Navlinks-Shadow Advantages-bgColor flex min-h-52 max-w-[200px] flex-col items-center justify-center rounded-lg border border-black p-4">
      <h2 className="cormaorant-bold m-3 text-2xl">{title}</h2>
      <p className="cormaorant-regular text-center font-semibold">
        {description}
      </p>
    </div>
  );
};

function Advantages() {
  return (
    <div className="my-10">
      <h2 className="cormaorant-bold text-center text-3xl">
        Our Assistance&apos;s advantages
      </h2>
      <p className="cormaorant-regular px-5 text-center font-semibold">
        The Assigner wants to build a strong foundation that will enable
        students to soar to achievement.
      </p>
      <div className="relative mt-3 flex flex-wrap items-center justify-center gap-5">
        <img
          src={assets.HeroX}
          alt="Hero"
          className="absolute -bottom-10 left-32 hidden rotate-180 md:block"
        />
        <img
          src={assets.HeroArrow}
          alt="Hero"
          className="absolute right-14 top-1 hidden -rotate-90 md:block"
        />
        <AdvantagesCard
          title={"No Plagiarism"}
          description="100% original answers that lessen the possibility of receiving a bad grade."
        />
        <AdvantagesCard
          title={"On-time Submission"}
          description="We promise to turn in the job ahead of schedule, no matter how difficult it is."
        />
        <AdvantagesCard
          title={"24/7 support"}
          description="Help for homework is available 24/7; we are always here to assist students with their assignments."
        />
        <AdvantagesCard
          title={"Rewrites that satisfy"}
          description="Get your schoolwork redone as many times as you like till you are happy."
        />
      </div>
    </div>
  );
}

export default Advantages;
