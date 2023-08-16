import React from "react";

const Services = () => {
  return (
    <section className="py-10 sm:py-20 md:py-24 lg:py-28 bg-[#f8f4f3]">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="text-center mb-10">
          <h6 className="text-blue-800 font-light text-sm md:text-base lg:text-lg uppercase tracking-[2px] teko">
            Nossos pontos fortes
          </h6>
          <h4 className="font-medium text-2xl md:text-4xl tracking-[1px] playfont">
            Infraestrutura completa
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="py-10 px-6 md:px-10 h-full bg-white border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal text-lg md:text-xl numb">01</h2>
            <h6 className="mb-3 md:mb-4">Iluminação em Led</h6>
            <p className="text-sm md:text-base">
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
          </div>
          <div className="py-10 px-6 md:px-10 h-full bg-white border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal text-lg md:text-xl numb">02</h2>
            <h6 className="mb-3 md:mb-4">Energia elétrica e iluminação</h6>
            <p className="text-sm md:text-base">
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
          </div>
          <div className="py-10 px-6 md:px-10 h-full bg-white border border-solid border-[#eee] border-r-0 transition-all duration-300 hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal text-lg md:text-xl numb">03</h2>
            <h6 className="mb-3 md:mb-4">Asfalto, guias e sarjetas</h6>
            <p className="text-sm md:text-base">
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
          </div>
          <div className="py-10 px-6 md:px-10 h-full bg-white border border-solid border-[#eee] transition-all duration-300 hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal text-lg md:text-xl numb">04</h2>
            <h6 className="mb-3 md:mb-4">Sinalização Viária</h6>
            <p className="text-sm md:text-base">
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
