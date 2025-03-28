import BackGround from "../assets/call.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [widthClass, setWidthClass] = useState(
    window.innerWidth >= 768 ? "w-1/12" : "w-2/12"
  );

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setWidthClass(
      isVisible
        ? "md:w-1/12 w-2/12"
        : window.innerWidth >= 1024
        ? "w-5/12"
        : window.innerWidth >= 768
        ? "w-7/12"
        : "w-9/12"
    );
  };

  return (
    <>
      <div className="absolute top-5/12 right-1/4 left-2/6 font-bold font-mono text-black lg:text-2xl text-xl">
        <p className={`${isVisible ? 'hidden' : 'block'}`}>
          Find your perfect trip,
        </p>
        <p className={`${isVisible ? 'hidden' : 'block'}`}>
          designed by insiders who
        </p>
        <p className={`${isVisible ? 'hidden' : 'block'} top-4`}>
           know and love their cities!
        </p>
      </div>

      <div className={`absolute top-24 h-2/5 end-0 ${widthClass} flex`}>
        <div className="flex flex-col h-full">
          <div className="h-full w-10 bg-neutral-300/45 flex items-center justify-center backdrop-blur-sm">
            <button className="text-5xl" onClick={toggleVisibility}>
              {isVisible ? ">" : "<"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center backdrop-blur-sm w-full">
          <div
            className="h-full w-full relative"
            style={{
              backgroundImage: `url(${BackGround})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute w-full h-full bg-white/40"></div>
            {isVisible && (
              <div className="absolute flex flex-col items-center justify-between w-full md:top-0 top-20 md:h-full p-4">
                <h2 className="text-black font-mono font-bold rounded md:text-4xl text-lg md:pb-0 pb-6">
                  "Explore the World."
                </h2>
                <div className="flex flex-col items-center w-full h-full justify-center">
                  <p className="text-black font-mono font-bold rounded text-xl md:block hidden">
                    "Book Your Adventure Today." 🌍✈️
                  </p>
                  <p className="text-black font-mono font-bold rounded text-xl md:block hidden">
                    Catchy and straight to the point.
                  </p>
                  <p className="text-black font-mono font-bold rounded text-xl md:block hidden">
                    How's that for a start?
                  </p>
                </div>
                <Link
                  to="/Cities"
                  className="font-bold text-neon animate-pulse md:text-4xl text-xl"
                >
                  JUST DO IT.
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;