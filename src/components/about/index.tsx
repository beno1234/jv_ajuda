const About = () => {
  return (
    <section className="relative py-32 about">
      <div className="px-32">
        <div className="flex container">
          <div className="relative w-1/2">
            <div
              className="w-[90%] h-[500px] relative bg-cover bg-no-repeat exp-img"
              style={{
                backgroundImage: "url(/exp.jpg)",
                visibility: "visible",
              }}
            >
              {/* Adicione o pseudo-elemento ::before para a sobreposição branca */}
              <div className="absolute top-10 left-10 right-10 bottom-10 bg-white "></div>
              <div className="absolute right-20 top-20">
                <span className="block text-blue-900w uppercase leading-4 text-base font-semibold tracking-[2px]">
                  Desde
                </span>
                <span className="block text-blue-900w uppercase leading-4 text-base font-bold tracking-[2px]">
                  2008
                </span>
              </div>
              <div className="absolute left-20 bottom-20 font-normal">
                <h2 className="letra">15</h2>
                <h5 className="text-blue-900w tracking-[5px] text-xl">
                  Anos de experiência
                </h5>
              </div>
            </div>
          </div>
          <div className=" w-1/2">
            <div className="relative z-20">
              <h6 className="text-blue-900 uppercase font-normal pl-16 tracking-[4px] mb-4 relative">
                <div className="absolute w-[50px]  h-[1px] bg-[#005ed3] left-0 top-[50%]"></div>
                Sobre nós
              </h6>
              <h2 className="mb-5 playfair">
                Quem Somos?
                <br />
                Cardeal Empreendimentos
              </h2>
              <p className="text-[#888] text-xl font-normal leading-loose ">
                A Cardeal Empreendimentos tem mais de 15 anos de experiência no
                mercado imobiliário, especializada em loteamentos e condomínios
                fechados. Nosso objetivo é oferecer projetos que atendam ao
                <span className="font-bold">"Indice Cardeal"</span>, um
                equilibrio ideal entre soluções inovadoras, qualidade
                excepcional e preços justos para nossos clientes, parceiros e
                comunidade.
              </p>

              <div className="mt-12">
                <div className="flex  grid-rows-3 grid-flow-col gap-16">
                  <div className="relative">
                    <div className="absolute right-[20%] -z-10 w-0 h-0 border-x-[35px] border-r-[#f7f7f7] bottom-9 border-solid"></div>
                    <h3 className="mb-2 text-4xl">
                      <span className="text-6xl text-blue-900 teko font-normal">
                        +30
                      </span>
                      <h6 className="text-xs font-medium uppercase tracking-[2px]">
                        Empreendimentos <br />
                        executados
                      </h6>
                      <div className="absolute right-[20%] -z-10 w-[35px] h-[35px] bottom-0 bg-[#f7f7f7]"></div>
                    </h3>
                  </div>
                  <div className="relative">
                    <div className="absolute right-[20%] -z-10 w-0 h-0 border-x-[35px] border-r-[#f7f7f7] bottom-9 border-solid"></div>
                    <h3 className="mb-2 text-4xl">
                      <span className="text-6xl text-blue-900w teko font-normal">
                        + 50 mil
                      </span>
                      <h6 className="text-xs font-medium uppercase tracking-[2px]">
                        vidas transformadas
                      </h6>
                      <div className="absolute right-[20%] -z-10 w-[35px] h-[35px] bottom-0 bg-[#f7f7f7]"></div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
