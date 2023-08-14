import React from "react";

const Services = () => {
  return (
    <section className="py-28 bg-gradient-to-l from-blue-800 to-black">
      <div className="px-16">
        <div className="relative mx-auto mb-20 text-center">
          <div className="flex justify-center">
            <div className="lg:col-span-6 md:col-span-8 sm:col-span-10">
              <h6 className="text-white font-light text-base uppercase tracking-[4px] mb-3 teko">
                Nossos pontos fortes
              </h6>
              <h4 className="font-medium text-white text-4xl tracking-[2px] playfont">
                Infraestrutura completa
              </h4>
            </div>
          </div>
        </div>
        <div className="animation flex overflow-hidden">
          <div className="lg:col-span-3 md:col-span-6 py-16 px-10 h-full bg-white border border-solid border-[#eee] border-r-0 transition-all duration-[.4s] hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal numb">01</h2>
            <h6 className="mb-5">Iluminação em Led</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" className="text-xl mt-8 teko font-normal">
              Ler Mais
            </a>
          </div>
          <div className="lg:col-span-3 md:col-span-6 py-16 px-10 h-full bg-white border border-solid border-[#eee] border-r-0 transition-all duration-[.4s] hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal numb">02</h2>
            <h6 className="mb-5">Energia elétrica e iluminação</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" className="text-xl mt-8 teko font-normal">
              Ler Mais
            </a>
          </div>
          <div className="lg:col-span-3 md:col-span-6 py-16 px-10 h-full bg-white border border-solid border-[#eee] border-r-0 transition-all duration-[.4s] hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal numb">03</h2>
            <h6 className="mb-5">Asfalto, guias e sarjetas</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" className="text-xl mt-8 teko font-normal">
              Ler Mais
            </a>
          </div>
          <div className="lg:col-span-3 md:col-span-6 py-16 px-10 h-full bg-white border border-solid border-[#eee] border-r-0 transition-all duration-[.4s] hover:bg-[#00000099] hover:text-white box">
            <h2 className="teko font-normal numb">04</h2>
            <h6 className="mb-5">Sinalização Viária</h6>
            <p>
              Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
              consequat.
            </p>
            <a href="#0" className="text-xl mt-8 teko font-normal">
              Ler Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
