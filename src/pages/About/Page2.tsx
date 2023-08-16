const Page2 = () => {
  return (
    <>
      <section className="relative py-16 md:py-24">
        <div className="px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="/pexels-anibal-pabon-13834317.jpg"
                alt="Imagem de exemplo"
                className="w-full h-auto md:rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:ml-8">
              <div className="mb-6 md:mb-0">
                <p className="text-[#888] text-sm md:text-base font-normal mb-3 md:mb-5 leading-relaxed">
                  A Cardeal Empreendimentos possui mais de 15 anos de
                  experiência no mercado imobiliário, sendo especializada em
                  loteamentos e condomínios fechados. Nosso objetivo é oferecer
                  projetos que atendam ao{" "}
                  <span className="font-bold">"Índice Cardeal"</span>, um
                  equilíbrio ideal entre soluções inovadoras, qualidade
                  excepcional e preços justos para nossos clientes, parceiros e
                  comunidade.
                </p>
                <p className="text-[#888] text-sm md:text-base font-normal leading-relaxed">
                  Com{" "}
                  <span className="font-bold">
                    loteamentos em várias cidades
                  </span>{" "}
                  e altas taxas de vendas, somos referência no mercado
                  imobiliário e estamos sempre aprimorando nossos serviços e
                  projetos para proporcionar o melhor para nossos clientes,
                  parceiros e para a sociedade como um todo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page2;
