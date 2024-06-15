import { ArrowRightAlt } from "@mui/icons-material";
import newsImage1 from "../../../assets/images/Home/News/main4.webp";

export const News = () => {
  return (
    <div className="px-4 pb-16 lg:px-24 mt-3 lg:pb-24 grid grid-flow-row lg:grid-flow-col gap-3">
      {/* Card One */}
      <div className="lg:h-[320px] flex flex-col lg:flex-row">
        <div className="bg-[#EEEFF0] lg:basis-1/2 p-8 text-left flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium">News</h3>
            <p className="mt-2">
              Click here for updates on our projects and what’s going on in our
              studio.
            </p>
            <p className="mt-2">
              You can also follow us on social media using the links below.
            </p>
          </div>
          <a href="/" className="tracking-widest text-base group mt-5">
            More
            <ArrowRightAlt className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
        <img
          src={newsImage1}
          className="w-full h-full object-cover basis-1/2"
          alt="newsimage"
        />
      </div>
      {/* Card Two */}
      <div className="lg:h-[320px] flex flex-col lg:flex-row">
        <div className="bg-[#EEEFF0] lg:basis-1/2 p-8 text-left flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium">News</h3>
            <p className="mt-2">
              Click here for updates on our projects and what’s going on in our
              studio.
            </p>
            <p className="mt-2">
              You can also follow us on social media using the links below.
            </p>
          </div>
          <a href="/" className="tracking-widest text-base group mt-5">
            More
            <ArrowRightAlt className="transform transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
        <img
          src={newsImage1}
          className="w-full h-full object-cover basis-1/2"
          alt="newsimage"
        />
      </div>
    </div>
  );
};
