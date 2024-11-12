const AdvantagesCard = ({ title, description }) => {
  return (
    <div className="cormaorant-regular Navlinks-Shadow Advantages-bgColor flex min-h-48 w-[250px] flex-col items-center justify-center rounded-lg border border-black p-4">
      <h2 className="cormaorant-bold m-2 text-2xl">{title}</h2>
      <p className="cormaorant-regular font-semibold">{description}</p>
    </div>
  );
};

function Advantages() {
  return (
    <div className="my-10">
      <h2 className="cormaorant-bold text-center text-3xl">
        Our Assistance&apos;s advantages
      </h2>
      <p className="cormaorant-regular text-center font-semibold">
        The Assigner wants to build a strong foundation that will enable
        students to soar to achievement.
      </p>
      <div className="mt-3 flex items-center justify-center gap-5">
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
