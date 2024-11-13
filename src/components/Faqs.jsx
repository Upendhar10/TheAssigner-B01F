import { assets } from "../assets/assets";
import { useState } from "react";

// Single FAQ component
const Faq = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className="Navinks-Shadow m-2 flex items-center justify-between border-2 p-2"
      onClick={onToggle}
    >
      <div>
        <p className="cormaorant-bold">{question}</p>
        <p
          className={`cormaorant-regular transition-all duration-300 ease-in-out ${
            isOpen
              ? "block max-h-screen opacity-100"
              : "hidden max-h-0 opacity-0"
          }`}
        >
          {answer}
        </p>
      </div>
      <img
        src={assets.arrow}
        alt="arrow"
        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </div>
  );
};

// FAQ list component
function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="cormaorant-bold text-center text-3xl">FAQ&apos;s</h2>
      <div className="mx-auto w-full md:w-5/6">
        {/* FAQ 1 */}
        <Faq
          question={"What services are available on our website?"}
          answer={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
          isOpen={openIndex === 0}
          onToggle={() => toggleFaq(0)}
        />
        {/* FAQ 2 */}
        <Faq
          question={"How can we guarantee the caliber of the assignments?"}
          answer={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
          isOpen={openIndex === 1}
          onToggle={() => toggleFaq(1)}
        />
        {/* FAQ 3 */}
        <Faq
          question={
            "What distinguishes our company from other assignment writing firms?"
          }
          answer={
            "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          }
          isOpen={openIndex === 2}
          onToggle={() => toggleFaq(2)}
        />
        {/* FAQ 4 */}
        <Faq
          question={"Does utilizing our service have any limitations?"}
          answer={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
          isOpen={openIndex === 3}
          onToggle={() => toggleFaq(3)}
        />
        {/* FAQ 5 */}
        <Faq
          question={"How can consumers access our website's news and updates?"}
          answer={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          }
          isOpen={openIndex === 4}
          onToggle={() => toggleFaq(4)}
        />
      </div>
    </div>
  );
}

export default Faqs;
