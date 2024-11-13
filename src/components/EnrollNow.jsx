function EnrollNowText() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="cormaorant-bold text-4xl text-[#9F0D76] md:text-5xl">
        ILETS Preparation
      </h2>
      <h2 className="cormaorant-bold text-4xl tracking-wider text-[#4C0C5C] md:text-5xl">
        Online Best Learning
      </h2>
      <h2 className="cormaorant-bold text-4xl text-[#A259FF] md:text-5xl">
        Opportunity in the World
      </h2>
      <p className="cormaorant-regular text-justify text-xl md:w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Audax negotium,
        dicerem impudens, nisi hoc institut translatum ad philosophos nostros
        esset.
      </p>
    </div>
  );
}

function EnrollNowBtn() {
  return (
    <button className="btn-BgColor cormaorant-regular m-5 w-[250px] rounded-md p-3 text-2xl text-white">
      Enroll Now
    </button>
  );
}

function EnrollNow() {
  return (
    <div className="EnrollNowBG relative flex items-center">
      <div>
        <EnrollNowText />
        <EnrollNowBtn />
      </div>
    </div>
  );
}

export default EnrollNow;

/*
      <div>
        <EnrollNowText />
        <EnrollNowBtn />
      </div>

*/
