import { assets } from "../assets/assets";
function ServiceCard({ src1, alt1, title, Number }) {
  return (
    <div className="cormaorant-regular Navlinks-Shadow flex min-h-48 w-[200px] flex-col items-center rounded-lg border border-black pb-2">
      <img src={src1} alt={alt1} className="rounded-t-md" />
      <p className="cormaorant-regular font-semibold">{title}</p>
      <div className="flex items-center gap-1">
        <img src={assets.Star} alt="stars" className="h-3 w-2" />
        <img src={assets.Star} alt="stars" className="h-3 w-2" />
        <img src={assets.Star} alt="stars" className="h-3 w-2" />
        <img src={assets.Star} alt="stars" className="h-3 w-2" />
        <img src={assets.Star} alt="stars" className="h-3 w-2" />
        <span className="text-sm">({Number})</span>
      </div>
    </div>
  );
}

// cormaorant-regular Navlinks-Shadow flex min-w-[125px] max-w-[250px] flex-col items-center rounded-lg border border-black bg-white pb-2

function Services() {
  return (
    <div className="my-10 bg-[#C414681A] p-3">
      <h2 className="cormaorant-bold text-center text-3xl">Our Services</h2>
      <p className="cormaorant-regular my-2 text-center font-semibold">
        we offer some fantastic services
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <ServiceCard
          src1={assets.Service1}
          alt1="Assignment"
          title="Assignment"
          Number="178"
        />
        <ServiceCard
          src1={assets.Service2}
          alt1="Dissertation"
          title="Dissertation"
          Number="150"
        />
        <ServiceCard
          src1={assets.Service3}
          alt1="CourseWork"
          title="CourseWork"
          Number="120"
        />
        <ServiceCard
          src1={assets.Service4}
          alt1="Thesis"
          title="Thesis"
          Number="129"
        />
        <ServiceCard
          src1={assets.Service5}
          alt1="Essay"
          title="Essay"
          Number="47"
        />
        <ServiceCard
          src1={assets.Service6}
          alt1="ResearchPaper"
          title="ResearchPaper"
          Number="59"
        />
        <ServiceCard
          src1={assets.Service7}
          alt1="PowerpointPresentation"
          title="PowerpointPresentation"
          Number="89"
        />
        <ServiceCard
          src1={assets.Service8}
          alt1="Programming"
          title="Programming"
          Number="134"
        />
        <ServiceCard
          src1={assets.Service9}
          alt1="PaperWriting"
          title="PaperWriting"
          Number="193"
        />
        <ServiceCard
          src1={assets.Service10}
          alt1="CaseStudy"
          title="CaseStudy"
          Number="125"
        />
        <ServiceCard
          src1={assets.Service11}
          alt1="SpeechWriting"
          title="SpeechWriting"
          Number="100"
        />
        <ServiceCard
          src1={assets.Service12}
          alt1="TermPaperWriting"
          title="TermPaperWriting"
          Number="135"
        />
        <ServiceCard
          src1={assets.Service13}
          alt1="CoverLetterWriting"
          title="CoverLetterWriting"
          Number="120"
        />
        <ServiceCard
          src1={assets.Service10}
          alt1="ResumeMaker"
          title="ResumeMaker"
          Number="132"
        />
      </div>
    </div>
  );
}

export default Services;
