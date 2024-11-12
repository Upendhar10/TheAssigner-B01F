import { assets } from "../assets/assets";
const Faq = ({ question }) => {
  return (
    <div className="Navinks-Shadow m-2 flex items-center justify-between border-2 p-2">
      <p className="cormaorant-bold">{question}</p>
      <img src={assets.arrow} alt="arrow" />
    </div>
  );
};

function Faqs() {
  return (
    <div>
      <h2 className="cormaorant-bold text-center text-3xl">FAQ&apos;s</h2>
      <div className="mx-auto w-5/6">
        <Faq question={"What services are available on our website?"} />
        <Faq
          question={"How can we guarantee the caliber of the assignments?"}
        />
        <Faq
          question={
            "What distinguishes our company from other assignment writing firms?"
          }
        />
        <Faq question={"Does utilizing our service have any limitations?"} />
        <Faq
          question={"How can consumers access our website's news and updates?"}
        />
      </div>
    </div>
  );
}

export default Faqs;
