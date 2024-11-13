import { assets } from "../assets/assets";

const Features = ({ src, title, description }) => {
  return (
    <div className="cormaorant-regular Navlinks-Shadow flex min-h-48 w-[200px] flex-col items-center rounded-lg border border-black p-4">
      <img src={src} alt="plagiarism" />
      <p className="m-2 font-semibold">{title}</p>
      <p className="text-center">{description}</p>
    </div>
  );
};

function AwesomeFeatures() {
  return (
    <div className="my-10 p-3 text-center">
      <h2 className="cormaorant-bold text-3xl">Awesome Features</h2>
      <p className="cormaorant-regular font-semibold">
        Get ready to unlock the next level of features
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-5">
        <Features
          src={assets.Plagiarism}
          title={"Plagiarism Checker"}
          description={
            "We will provide access to assignments free of plagiarism"
          }
        />
        <Features
          src={assets.FreePublications}
          title={"Free Publications"}
          description={
            "We will provide access to assignments free of plagiarism"
          }
        />
        <Features
          src={assets.FreePDF}
          title={"Provides Free books and PDF"}
          description={"Free Books and PDF will be provided"}
        />
        <Features
          src={assets.Praphraser}
          title={"Paraphraser"}
          description={"A Paraphraser will be provided"}
        />
      </div>
    </div>
  );
}

export default AwesomeFeatures;
