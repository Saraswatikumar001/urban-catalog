import React from "react";
import heroImg from "../../assets/img1.png";

const ExperienceSection = () => {
  return (
    <section className="md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="pt-24">
          <span className="text-[#B1441D] font-semibold uppercase">
            About Us
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-3 leading-tight">
            Experienced & Quality <br /> Concrete Solution Providers.
          </h2>
          <p className="text-gray-600 mt-4 max-w-md">
            Urban Mix Concrete is committed to manufacturing premium quality
            paver blocks, tiles and construction materials using modern
            technology and skilled workmanship.
          </p>
          {/* Feature List */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                ✔
              </div>
              <div>
                <h4 className="font-semibold">Expert Engineers</h4>
                <p className="text-gray-600 text-sm">
                  Skilled professionals ensuring precision and durability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                ✔
              </div>
              <div>
                <h4 className="font-semibold">Certified Manufacturing Plant</h4>
                <p className="text-gray-600 text-sm">
                  Advanced machinery with strict quality control.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">
            Discover More
          </button>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative flex justify-center">
         <img src={heroImg} alt="hero image"
         />         

          {/* Experience Badge */}
          <div className="absolute md:bottom-[123px] bottom-[-152px] md:left-[11px] left-[168px] -translate-x-1/2 bg-orange-500 text-white w-80 h-34 md:w-33 md:h-33 md:rounded-full flex flex-col items-center justify-center shadow-lg">
            <h3 className="text-3xl font-bold">340+</h3>
            <p className="text-sm text-center">Projects <br/>Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
