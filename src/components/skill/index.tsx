import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
  const percentage = 0; // Set your desired percentage value here

  return (
    <section className="bg-[url('/5.webp')] bg-cover bg-no-repeat bg-fixed bg-center relative py-10 md:py-16">
      <div className="absolute bg-[#02050b] w-full h-full top-0 left-0 opacity-70"></div>
      <div className="px-4 md:px-16">
        <div className="relative mx-auto mb-8 text-center">
          <div className="flex justify-center">
            <div className="lg:col-span-6 md:col-span-8 sm:col-span-10">
              <h6 className="text-white font-light text-base uppercase tracking-[2px] mb-3 teko">
                Obra
              </h6>
              <h4 className="font-medium text-2xl md:text-4xl tracking-[1px] playfont text-white">
                Status da Obra
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 py-8">
            <div className="text-center">
              <div className="relative">
                <CircularProgressbar
                  className="skills-circle"
                  value={percentage}
                  text={`${percentage}%`}
                />
                <h6 className="text-sm uppercase tracking-[2px] mt-3 text-white">
                  Abertura das ruas
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 py-8">
            <div className="text-center">
              <div className="relative">
                <CircularProgressbar
                  className="skills-circle"
                  value={percentage}
                  text={`${percentage}%`}
                />
                <h6 className="text-sm uppercase tracking-[2px] mt-3 text-white">
                  Terraplanagem
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 py-8">
            <div className="text-center">
              <div className="relative">
                <CircularProgressbar
                  className="skills-circle"
                  value={percentage}
                  text={`${percentage}%`}
                />
                <h6 className="text-sm uppercase tracking-[2px] mt-3 text-white">
                  INOVATION
                </h6>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 py-8">
            <div className="text-center">
              <div className="relative">
                <CircularProgressbar
                  className="skills-circle"
                  value={percentage}
                  text={`${percentage}%`}
                />
                <h6 className="text-sm uppercase tracking-[2px] mt-3 text-white">
                  Drenagem Pluvial
                </h6>
              </div>
            </div>
          </div>
          {/* Repeat similar sections for other skill categories */}
        </div>
      </div>
    </section>
  );
};

export default Skill;
